import typer
from rich.console import Console
from rich.panel import Panel
from rich.table import Table
from mcpx.utils.config import load_registry

console = Console()

app = typer.Typer()


@app.command()
def info(name: str = typer.Argument(..., help="MCP server name")):
    """Show detailed information about an MCP server."""
    registry = load_registry()
    
    if name not in registry:
        console.print(f"[red]✗ '{name}' not found in registry.[/red]")
        console.print("[dim]Run 'mcpx search' to see available MCPs.[/dim]")
        raise typer.Exit(1)
    
    mcp = registry[name]
    
    console.print(Panel(
        f"[bold cyan]{mcp['name']}[/bold cyan]\n\n"
        f"[dim]{mcp['description']}[/dim]",
        title="📦 MCP Information",
        border_style="cyan"
    ))
    
    console.print(f"\n[bold]ID:[/bold] {name}")
    
    if mcp.get('npm'):
        console.print(f"[bold]NPM Package:[/bold] {mcp['npm']}")
    else:
        console.print("[bold]NPM Package:[/bold] [dim]Uses third-party package[/dim]")
    
    # Fields
    fields = mcp.get('fields', [])
    if fields:
        console.print(f"\n[bold]Required Fields ({len(fields)}):[/bold]")
        table = Table(show_header=False, box=None)
        table.add_column("Key", style="yellow")
        table.add_column("Label", style="bold")
        table.add_column("Type", style="dim")
        table.add_column("URL", style="blue")
        
        for field in fields:
            field_type = "Secret" if field.get('secret') else "Public"
            url = field.get('url', '-') or '-'
            if url != '-' and len(url) > 50:
                url = url[:47] + '...'
            table.add_row(
                field['key'],
                field['label'],
                field_type,
                url
            )
        
        console.print()
        console.print(table)
    else:
        console.print("\n[bold]Required Fields:[/bold] [green]None (no configuration needed)[/green]")
    
    # Config
    config = mcp.get('config', {})
    console.print(f"\n[bold]Command:[/bold] {config.get('command', 'N/A')}")
    
    if config.get('args'):
        console.print(f"[bold]Args:[/bold]")
        for arg in config['args']:
            console.print(f"  [dim]•[/dim] {arg}")
    
    if config.get('env'):
        console.print(f"\n[bold]Environment Variables:[/bold]")
        for env_key, env_val in config['env'].items():
            console.print(f"  [dim]•[/dim] {env_key}={env_val}")
    
    console.print()
