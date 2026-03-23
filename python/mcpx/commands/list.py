# Re-export commands from add.py for backwards compatibility
from mcpx.commands.add import add, list_mcps, remove, doctor

__all__ = ['add', 'list_mcps', 'remove', 'doctor']
