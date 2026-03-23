import typer
from rich.console import Console
from mcpx.commands.add import add, list_mcps, remove, doctor
from mcpx.commands.search import search
from mcpx.commands.info import info
from mcpx.commands.init import init

console = Console()

app = typer.Typer(
    name="mcpx",
    help="Install and configure MCP servers in any editor. No marketplace. No friction. Just works.",
    add_completion=False,
    context_settings={"help_option_names": ["-h", "--help"]}
)

app.command("add")(add)
app.command("list")(list_mcps)
app.command("remove")(remove)
app.command("doctor")(doctor)
app.command("search")(search)
app.command("info")(info)
app.command("init")(init)


def version_callback(value: bool):
    if value:
        console.print("[cyan]mcpx[/cyan] version [green]0.2.0[/green]")
        raise typer.Exit()


@app.callback()
def main(
    version: bool = typer.Option(
        False, "--version", "-v",
        callback=version_callback,
        is_eager=True,
        help="Show version and exit"
    )
):
    """
    [bold]mcpx[/bold] - CLI to install and configure MCP servers in any editor.
    
    [dim]No marketplace. No friction. Just works.[/dim]
    """
    pass


if __name__ == "__main__":
    app()
