import typer
from rich.console import Console
from rich.panel import Panel
from pathlib import Path
from mcpx.utils.config import MCPX_DIR, STATE_FILE

console = Console()

app = typer.Typer()


@app.command()
def init():
    """Initialize mcpx and create necessary directories."""
    console.print(Panel("[bold]Initializing mcpx[/bold]", border_style="cyan"))
    
    # Create mcpx directory
    if not MCPX_DIR.exists():
        MCPX_DIR.mkdir(parents=True, exist_ok=True)
        console.print(f"  [green]✓[/green] Created directory: {MCPX_DIR}")
    else:
        console.print(f"  [dim]✓[/dim] Directory exists: {MCPX_DIR}")
    
    # Create state file if not exists
    if not STATE_FILE.exists():
        STATE_FILE.write_text('{"installed": {}}')
        console.print(f"  [green]✓[/green] Created state file: {STATE_FILE}")
    else:
        console.print(f"  [dim]✓[/dim] State file exists: {STATE_FILE}")
    
    console.print()
    console.print(Panel(
        "[green]✓ mcpx is ready to use![/green]\n\n"
        "[dim]Run 'mcpx search' to browse available MCP servers.\n"
        "Run 'mcpx add <name>' to install an MCP server.[/dim]",
        border_style="green"
    ))
    console.print()
