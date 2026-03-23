import typer
from rich.console import Console
from rich.table import Table
from rich.panel import Panel
from mcpx.utils.config import load_registry

console = Console()

app = typer.Typer()


@app.command()
def search(query: str = typer.Argument(None, help="Search query (server name or description)")):
    """Search for MCP servers in the registry."""
    registry = load_registry()
    
    console.print(Panel("[bold]Available MCP Servers[/bold]", border_style="cyan"))
    console.print()
    
    results = []
    if query:
        query_lower = query.lower()
        for key, mcp in registry.items():
            if query_lower in key.lower() or query_lower in mcp.get('name', '').lower() or query_lower in mcp.get('description', '').lower():
                results.append((key, mcp))
    else:
        results = list(registry.items())
    
    if not results:
        if query:
            console.print(f"[yellow]No MCPs found matching '{query}'[/yellow]\n")
        else:
            console.print("[dim]No MCPs in registry.[/dim]\n")
        return
    
    table = Table(show_header=True, header_style="bold cyan", box=None)
    table.add_column("Name", style="green", min_width=20)
    table.add_column("Description", style="dim")
    
    for key, mcp in results:
        table.add_row(key, mcp.get('description', '')[:60])
    
    console.print(table)
    console.print()
    
    if query:
        console.print(f"[dim]Found {len(results)} MCP(s) matching '{query}'[/dim]\n")
    else:
        console.print(f"[dim]Total: {len(results)} MCP(s) available[/dim]\n")
        console.print("[dim]Use 'mcpx search <query>' to filter results[/dim]\n")
