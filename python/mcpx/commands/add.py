import typer
import json
from pathlib import Path
from rich.console import Console
from rich.panel import Panel
from rich.table import Table
from mcpx.utils.config import (
    load_registry,
    load_state,
    save_state,
    load_editor_config,
    save_editor_config,
    get_config_path,
)
from mcpx.utils.editors import EDITORS
import webbrowser
import time

console = Console()

app = typer.Typer()


def replace_placeholders(args: list, values: dict) -> list:
    """Replace ${KEY} placeholders with actual values."""
    result = []
    for arg in args:
        for key, val in values.items():
            arg = arg.replace(f"${{{key}}}", val)
        result.append(arg)
    return result


def replace_env_placeholders(env: dict, values: dict) -> dict:
    """Replace ${KEY} placeholders in env dict."""
    result = {}
    for key, val in env.items():
        for k, v in values.items():
            val = val.replace(f"${{{k}}}", v)
        result[key] = val
    return result


@app.command()
def add(name: str):
    """Add and configure an MCP server."""
    registry = load_registry()
    
    if name not in registry:
        console.print(f"[red]✗ '{name}' not found in registry.[/red]")
        console.print("[dim]Run 'mcpx list' to see available MCPs.[/dim]")
        raise typer.Exit(1)
    
    mcp = registry[name]
    
    console.print(Panel(
        f"[bold]Adding [cyan]{mcp['name']}[/cyan]\n\n"
        f"[dim]{mcp['description']}[/dim]",
        title="🔧 MCP Setup",
        border_style="cyan"
    ))
    
    # 1. Select editor
    editor_choices = list(EDITORS.keys())
    editor_labels = [EDITORS[e]['label'] for e in editor_choices]
    
    console.print("\n[bold]Select your editor:[/bold]")
    for i, (key, editor) in enumerate(EDITORS.items(), 1):
        console.print(f"  [cyan]{i}.[/cyan] {editor['label']}")
    
    editor_idx = typer.prompt("Enter number", type=int)
    if editor_idx < 1 or editor_idx > len(editor_choices):
        console.print("[red]Invalid selection[/red]")
        raise typer.Exit(1)
    
    editor = editor_choices[editor_idx - 1]
    
    # 2. Collect fields
    values = {}
    for field in mcp.get('fields', []):
        if field.get('url'):
            console.print(f"\n[yellow]→ Opening {field['label']} page...[/yellow]")
            console.print(f"[dim]  {field['url']}[/dim]")
            webbrowser.open(field['url'])
            time.sleep(0.5)
        
        if field.get('secret', False):
            value = typer.prompt(f"Enter {field['label']}", hide_input=True)
        else:
            value = typer.prompt(f"Enter {field['label']}")
        
        if not value.strip():
            console.print("[red]Cannot be empty[/red]")
            raise typer.Exit(1)
        
        values[field['key']] = value.strip()
    
    # 3. Build config entry
    config_entry = json.loads(json.dumps(mcp['config']))
    
    if 'args' in config_entry:
        config_entry['args'] = replace_placeholders(config_entry['args'], values)
    
    if 'env' in config_entry:
        config_entry['env'] = replace_env_placeholders(config_entry['env'], values)
    
    # 4. Inject into editor config
    config_path = get_config_path(editor)
    if not config_path:
        console.print("[red]Could not determine config path for this editor/platform[/red]")
        raise typer.Exit(1)
    
    editor_config = load_editor_config(config_path)
    if 'mcpServers' not in editor_config:
        editor_config['mcpServers'] = {}
    
    editor_config['mcpServers'][name] = config_entry
    save_editor_config(config_path, editor_config)
    
    # 5. Save state
    state = load_state()
    state['installed'][name] = {
        'editor': editor,
        'addedAt': time.strftime('%Y-%m-%dT%H:%M:%SZ')
    }
    save_state(state)
    
    console.print(Panel(
        f"[green]✓ {mcp['name']} configured for {EDITORS[editor]['label']}[/green]\n\n"
        f"[dim]Config written to: {config_path}[/dim]\n\n"
        f"[yellow]Restart your editor to apply changes.[/yellow]",
        title="✅ Success",
        border_style="green"
    ))


@app.command("list")
def list_mcps():
    """List installed MCP servers."""
    state = load_state()
    registry = load_registry()
    installed = state.get('installed', {})
    
    console.print(Panel("[bold]Installed MCP Servers[/bold]", border_style="cyan"))
    
    if not installed:
        console.print("\n[dim]No MCPs installed yet. Run 'mcpx add <name>'[/dim]\n")
        return
    
    table = Table(show_header=False, box=None)
    table.add_column("Status", style="cyan")
    table.add_column("Name", style="bold")
    table.add_column("Editor", style="dim")
    table.add_column("Description", style="dim")
    
    for name, info in installed.items():
        mcp = registry.get(name, {})
        editor_label = EDITORS.get(info['editor'], {}).get('label', info['editor'])
        description = mcp.get('description', '')
        table.add_row("●", name, f"→ {editor_label}", description)
    
    console.print()
    console.print(table)
    console.print()
    
    available = list(registry.keys())
    console.print(f"[dim]Available: {', '.join(available)}[/dim]\n")


@app.command()
def remove(name: str):
    """Remove an MCP server config."""
    state = load_state()
    
    if name not in state.get('installed', {}):
        console.print(f"[red]✗ '{name}' is not installed.[/red]")
        raise typer.Exit(1)
    
    info = state['installed'][name]
    editor = info['editor']
    config_path = get_config_path(editor)
    
    if config_path and config_path.exists():
        editor_config = load_editor_config(config_path)
        if 'mcpServers' in editor_config and name in editor_config['mcpServers']:
            del editor_config['mcpServers'][name]
            save_editor_config(config_path, editor_config)
    
    del state['installed'][name]
    save_state(state)
    
    console.print(Panel(
        f"[green]✓ '{name}' removed successfully.[/green]\n\n"
        f"[yellow]Restart your editor to apply changes.[/yellow]",
        title="🗑️ Removed",
        border_style="yellow"
    ))


@app.command()
def doctor():
    """Check your MCP setup."""
    import subprocess
    import sys
    
    console.print(Panel("[bold]mcpx doctor[/bold]", border_style="cyan"))
    console.print()
    
    checks = []
    
    # Python version
    python_version = f"{sys.version_info.major}.{sys.version_info.minor}.{sys.version_info.micro}"
    checks.append({
        'label': f'Python {python_version}',
        'ok': sys.version_info >= (3, 10)
    })
    
    # State
    state = load_state()
    installed_count = len(state.get('installed', {}))
    checks.append({
        'label': f'{installed_count} MCP(s) installed',
        'ok': True
    })
    
    # Config files
    for key, editor in EDITORS.items():
        installed_editors = [i for i in state.get('installed', {}).values() if i['editor'] == key]
        if not installed_editors:
            continue
        
        config_path = get_config_path(key)
        if not config_path:
            continue
        
        exists = config_path.exists()
        mcp_count = 0
        if exists:
            editor_config = load_editor_config(config_path)
            mcp_count = len(editor_config.get('mcpServers', {}))
        
        checks.append({
            'label': f"{editor['label']} config ({mcp_count} MCP(s))",
            'ok': exists
        })
    
    for check in checks:
        icon = "[green]✓[/green]" if check['ok'] else "[red]✗[/red]"
        console.print(f"  {icon} {check['label']}")
    
    all_ok = all(c['ok'] for c in checks)
    
    console.print()
    if all_ok:
        console.print("[green]All checks passed.[/green]\n")
    else:
        console.print("[red]Some checks failed. Fix the issues above.[/red]\n")
