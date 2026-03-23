import os
import sys
from pathlib import Path

HOME = Path.home()

EDITORS = {
    'claude-desktop': {
        'label': 'Claude Desktop',
        'config': {
            'win32': HOME / 'AppData' / 'Roaming' / 'Claude' / 'claude_desktop_config.json',
            'darwin': HOME / 'Library' / 'Application Support' / 'Claude' / 'claude_desktop_config.json',
            'linux': HOME / '.config' / 'Claude' / 'claude_desktop_config.json'
        }
    },
    'claude-code': {
        'label': 'Claude Code (CLI)',
        'config': {
            'win32': HOME / '.claude' / 'settings.json',
            'darwin': HOME / '.claude' / 'settings.json',
            'linux': HOME / '.claude' / 'settings.json'
        }
    },
    'cursor': {
        'label': 'Cursor',
        'config': {
            'win32': HOME / 'AppData' / 'Roaming' / 'Cursor' / 'User' / 'globalStorage' / 'saoudrizwan.claude-dev' / 'settings' / 'cline_mcp_settings.json',
            'darwin': HOME / 'Library' / 'Application Support' / 'Cursor' / 'User' / 'globalStorage' / 'saoudrizwan.claude-dev' / 'settings' / 'cline_mcp_settings.json',
            'linux': HOME / '.config' / 'Cursor' / 'User' / 'globalStorage' / 'saoudrizwan.claude-dev' / 'settings' / 'cline_mcp_settings.json'
        }
    },
    'cursor-old': {
        'label': 'Cursor (Legacy)',
        'config': {
            'win32': HOME / 'AppData' / 'Roaming' / 'Cursor' / 'User' / 'settings.json',
            'darwin': HOME / 'Library' / 'Application Support' / 'Cursor' / 'User' / 'settings.json',
            'linux': HOME / '.config' / 'Cursor' / 'User' / 'settings.json'
        }
    },
    'vscode': {
        'label': 'VSCode (Copilot Chat)',
        'config': {
            'win32': HOME / 'AppData' / 'Roaming' / 'Code' / 'User' / 'settings.json',
            'darwin': HOME / 'Library' / 'Application Support' / 'Code' / 'User' / 'settings.json',
            'linux': HOME / '.config' / 'Code' / 'User' / 'settings.json'
        }
    },
    'vscode-insiders': {
        'label': 'VSCode Insiders',
        'config': {
            'win32': HOME / 'AppData' / 'Roaming' / 'Code - Insiders' / 'User' / 'settings.json',
            'darwin': HOME / 'Library' / 'Application Support' / 'Code - Insiders' / 'User' / 'settings.json',
            'linux': HOME / '.config' / 'Code - Insiders' / 'User' / 'settings.json'
        }
    },
    'trae': {
        'label': 'Trae',
        'config': {
            'win32': HOME / 'AppData' / 'Roaming' / 'Trae' / 'User' / 'mcp_settings.json',
            'darwin': HOME / 'Library' / 'Application Support' / 'Trae' / 'User' / 'mcp_settings.json',
            'linux': HOME / '.config' / 'Trae' / 'User' / 'mcp_settings.json'
        }
    },
    'windsurf': {
        'label': 'Windsurf',
        'config': {
            'win32': HOME / 'AppData' / 'Roaming' / 'Windsurf' / 'User' / 'mcp_config.json',
            'darwin': HOME / 'Library' / 'Application Support' / 'Windsurf' / 'User' / 'mcp_config.json',
            'linux': HOME / '.config' / 'Windsurf' / 'User' / 'mcp_config.json'
        }
    },
    'zed': {
        'label': 'Zed',
        'config': {
            'win32': HOME / 'AppData' / 'Roaming' / 'Zed' / 'settings.json',
            'darwin': HOME / 'Library' / 'Application Support' / 'Zed' / 'settings.json',
            'linux': HOME / '.config' / 'zed' / 'settings.json'
        }
    },
    'zed-preview': {
        'label': 'Zed Preview',
        'config': {
            'win32': HOME / 'AppData' / 'Roaming' / 'Zed-Preview' / 'settings.json',
            'darwin': HOME / 'Library' / 'Application Support' / 'Zed-Preview' / 'settings.json',
            'linux': HOME / '.config' / 'zed-preview' / 'settings.json'
        }
    },
    'cline': {
        'label': 'Cline (VSCode Extension)',
        'config': {
            'win32': HOME / 'AppData' / 'Roaming' / 'Code' / 'User' / 'globalStorage' / 'saoudrizwan.claude-dev' / 'settings' / 'cline_mcp_settings.json',
            'darwin': HOME / 'Library' / 'Application Support' / 'Code' / 'User' / 'globalStorage' / 'saoudrizwan.claude-dev' / 'settings' / 'cline_mcp_settings.json',
            'linux': HOME / '.config' / 'Code' / 'User' / 'globalStorage' / 'saoudrizwan.claude-dev' / 'settings' / 'cline_mcp_settings.json'
        }
    },
    'roo-cline': {
        'label': 'Roo Cline (VSCode Extension)',
        'config': {
            'win32': HOME / 'AppData' / 'Roaming' / 'Code' / 'User' / 'globalStorage' / 'rooveterinaryinc.roo-cline' / 'settings' / 'cline_mcp_settings.json',
            'darwin': HOME / 'Library' / 'Application Support' / 'Code' / 'User' / 'globalStorage' / 'rooveterinaryinc.roo-cline' / 'settings' / 'cline_mcp_settings.json',
            'linux': HOME / '.config' / 'Code' / 'User' / 'globalStorage' / 'rooveterinaryinc.roo-cline' / 'settings' / 'cline_mcp_settings.json'
        }
    },
    'copilot': {
        'label': 'GitHub Copilot Chat',
        'config': {
            'win32': HOME / 'AppData' / 'Roaming' / 'Code' / 'User' / 'settings.json',
            'darwin': HOME / 'Library' / 'Application Support' / 'Code' / 'User' / 'settings.json',
            'linux': HOME / '.config' / 'Code' / 'User' / 'settings.json'
        }
    },
    'copilot-vs': {
        'label': 'Visual Studio Copilot',
        'config': {
            'win32': HOME / 'AppData' / 'Roaming' / 'Microsoft' / 'VisualStudio' / '17.0' / 'settings.json',
            'darwin': HOME / 'Library' / 'Application Support' / 'Visual Studio' / '17.0' / 'settings.json',
            'linux': None
        }
    },
    'intellij': {
        'label': 'IntelliJ IDEA (AI Assistant)',
        'config': {
            'win32': HOME / 'AppData' / 'Roaming' / 'JetBrains' / 'IntelliJIdea2024.1' / 'options' / 'mcp.json',
            'darwin': HOME / 'Library' / 'Application Support' / 'JetBrains' / 'IntelliJIdea2024.1' / 'options' / 'mcp.json',
            'linux': HOME / '.config' / 'JetBrains' / 'IntelliJIdea2024.1' / 'options' / 'mcp.json'
        }
    },
    'pycharm': {
        'label': 'PyCharm (AI Assistant)',
        'config': {
            'win32': HOME / 'AppData' / 'Roaming' / 'JetBrains' / 'PyCharm2024.1' / 'options' / 'mcp.json',
            'darwin': HOME / 'Library' / 'Application Support' / 'JetBrains' / 'PyCharm2024.1' / 'options' / 'mcp.json',
            'linux': HOME / '.config' / 'JetBrains' / 'PyCharm2024.1' / 'options' / 'mcp.json'
        }
    },
    'webstorm': {
        'label': 'WebStorm (AI Assistant)',
        'config': {
            'win32': HOME / 'AppData' / 'Roaming' / 'JetBrains' / 'WebStorm2024.1' / 'options' / 'mcp.json',
            'darwin': HOME / 'Library' / 'Application Support' / 'JetBrains' / 'WebStorm2024.1' / 'options' / 'mcp.json',
            'linux': HOME / '.config' / 'JetBrains' / 'WebStorm2024.1' / 'options' / 'mcp.json'
        }
    },
    'android-studio': {
        'label': 'Android Studio (AI Assistant)',
        'config': {
            'win32': HOME / 'AppData' / 'Roaming' / 'Google' / 'AndroidStudio2024.1' / 'options' / 'mcp.json',
            'darwin': HOME / 'Library' / 'Application Support' / 'Google' / 'AndroidStudio2024.1' / 'options' / 'mcp.json',
            'linux': HOME / '.config' / 'Google' / 'AndroidStudio2024.1' / 'options' / 'mcp.json'
        }
    },
    'xcode': {
        'label': 'Xcode (Apple Intelligence)',
        'config': {
            'win32': None,
            'darwin': HOME / 'Library' / 'Developer' / 'Xcode' / 'UserData' / 'mcp.json',
            'linux': None
        }
    },
    'neovim': {
        'label': 'Neovim (with AI plugins)',
        'config': {
            'win32': HOME / 'AppData' / 'Local' / 'nvim' / 'mcp.json',
            'darwin': HOME / '.config' / 'nvim' / 'mcp.json',
            'linux': HOME / '.config' / 'nvim' / 'mcp.json'
        }
    },
    'vim': {
        'label': 'Vim',
        'config': {
            'win32': HOME / '_vimrc',
            'darwin': HOME / '.vimrc',
            'linux': HOME / '.vimrc'
        }
    },
    'emacs': {
        'label': 'Emacs',
        'config': {
            'win32': HOME / '_emacs',
            'darwin': HOME / '.emacs',
            'linux': HOME / '.emacs'
        }
    },
    'sublime': {
        'label': 'Sublime Text',
        'config': {
            'win32': HOME / 'AppData' / 'Roaming' / 'Sublime Text' / 'Packages' / 'User' / 'mcp.json',
            'darwin': HOME / 'Library' / 'Application Support' / 'Sublime Text' / 'Packages' / 'User' / 'mcp.json',
            'linux': HOME / '.config' / 'sublime-text' / 'Packages' / 'User' / 'mcp.json'
        }
    },
    'atom': {
        'label': 'Atom',
        'config': {
            'win32': HOME / '.atom' / 'config.cson',
            'darwin': HOME / '.atom' / 'config.cson',
            'linux': HOME / '.atom' / 'config.cson'
        }
    },
    'brackets': {
        'label': 'Brackets',
        'config': {
            'win32': HOME / 'AppData' / 'Roaming' / 'Brackets' / 'brackets.json',
            'darwin': HOME / 'Library' / 'Application Support' / 'Brackets' / 'brackets.json',
            'linux': HOME / '.config' / 'Brackets' / 'brackets.json'
        }
    },
    'notion-ai': {
        'label': 'Notion AI',
        'config': {
            'win32': HOME / 'AppData' / 'Roaming' / 'Notion' / 'mcp.json',
            'darwin': HOME / 'Library' / 'Application Support' / 'Notion' / 'mcp.json',
            'linux': HOME / '.config' / 'Notion' / 'mcp.json'
        }
    },
    'obsidian': {
        'label': 'Obsidian (with AI plugins)',
        'config': {
            'win32': HOME / 'AppData' / 'Roaming' / 'obsidian' / 'mcp.json',
            'darwin': HOME / 'Library' / 'Application Support' / 'obsidian' / 'mcp.json',
            'linux': HOME / '.config' / 'obsidian' / 'mcp.json'
        }
    },
    'logseq': {
        'label': 'Logseq',
        'config': {
            'win32': HOME / 'AppData' / 'Roaming' / 'logseq' / 'mcp.json',
            'darwin': HOME / 'Library' / 'Application Support' / 'logseq' / 'mcp.json',
            'linux': HOME / '.config' / 'logseq' / 'mcp.json'
        }
    },
    'custom': {
        'label': 'Custom (specify path)',
        'config': {
            'win32': None,
            'darwin': None,
            'linux': None
        }
    }
}


def get_config_path(editor: str, custom_path: str = None) -> Path:
    if editor == 'custom' and custom_path:
        return Path(custom_path)
    platform = sys.platform
    editor_conf = EDITORS.get(editor)
    if not editor_conf:
        return None
    paths = editor_conf['config']
    if platform == 'win32':
        return paths['win32']
    elif platform == 'darwin':
        return paths['darwin']
    else:
        return paths['linux']
