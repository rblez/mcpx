import os from 'os'
import path from 'path'

export const EDITORS = {
  'claude-desktop': {
    label: 'Claude Desktop',
    config: {
      win32: path.join(os.homedir(), 'AppData', 'Roaming', 'Claude', 'claude_desktop_config.json'),
      darwin: path.join(os.homedir(), 'Library', 'Application Support', 'Claude', 'claude_desktop_config.json'),
      linux: path.join(os.homedir(), '.config', 'Claude', 'claude_desktop_config.json')
    }
  },
  'claude-code': {
    label: 'Claude Code (CLI)',
    config: {
      win32: path.join(os.homedir(), '.claude', 'settings.json'),
      darwin: path.join(os.homedir(), '.claude', 'settings.json'),
      linux: path.join(os.homedir(), '.claude', 'settings.json')
    }
  },
  'cursor': {
    label: 'Cursor',
    config: {
      win32: path.join(os.homedir(), 'AppData', 'Roaming', 'Cursor', 'User', 'globalStorage', 'saoudrizwan.claude-dev', 'settings', 'cline_mcp_settings.json'),
      darwin: path.join(os.homedir(), 'Library', 'Application Support', 'Cursor', 'User', 'globalStorage', 'saoudrizwan.claude-dev', 'settings', 'cline_mcp_settings.json'),
      linux: path.join(os.homedir(), '.config', 'Cursor', 'User', 'globalStorage', 'saoudrizwan.claude-dev', 'settings', 'cline_mcp_settings.json')
    }
  },
  'cursor-old': {
    label: 'Cursor (Legacy)',
    config: {
      win32: path.join(os.homedir(), 'AppData', 'Roaming', 'Cursor', 'User', 'settings.json'),
      darwin: path.join(os.homedir(), 'Library', 'Application Support', 'Cursor', 'User', 'settings.json'),
      linux: path.join(os.homedir(), '.config', 'Cursor', 'User', 'settings.json')
    }
  },
  'vscode': {
    label: 'VSCode (Copilot Chat)',
    config: {
      win32: path.join(os.homedir(), 'AppData', 'Roaming', 'Code', 'User', 'settings.json'),
      darwin: path.join(os.homedir(), 'Library', 'Application Support', 'Code', 'User', 'settings.json'),
      linux: path.join(os.homedir(), '.config', 'Code', 'User', 'settings.json')
    }
  },
  'vscode-insiders': {
    label: 'VSCode Insiders',
    config: {
      win32: path.join(os.homedir(), 'AppData', 'Roaming', 'Code - Insiders', 'User', 'settings.json'),
      darwin: path.join(os.homedir(), 'Library', 'Application Support', 'Code - Insiders', 'User', 'settings.json'),
      linux: path.join(os.homedir(), '.config', 'Code - Insiders', 'User', 'settings.json')
    }
  },
  'trae': {
    label: 'Trae',
    config: {
      win32: path.join(os.homedir(), 'AppData', 'Roaming', 'Trae', 'User', 'mcp_settings.json'),
      darwin: path.join(os.homedir(), 'Library', 'Application Support', 'Trae', 'User', 'mcp_settings.json'),
      linux: path.join(os.homedir(), '.config', 'Trae', 'User', 'mcp_settings.json')
    }
  },
  'windsurf': {
    label: 'Windsurf',
    config: {
      win32: path.join(os.homedir(), 'AppData', 'Roaming', 'Windsurf', 'User', 'mcp_config.json'),
      darwin: path.join(os.homedir(), 'Library', 'Application Support', 'Windsurf', 'User', 'mcp_config.json'),
      linux: path.join(os.homedir(), '.config', 'Windsurf', 'User', 'mcp_config.json')
    }
  },
  'zed': {
    label: 'Zed',
    config: {
      win32: path.join(os.homedir(), 'AppData', 'Roaming', 'Zed', 'settings.json'),
      darwin: path.join(os.homedir(), 'Library', 'Application Support', 'Zed', 'settings.json'),
      linux: path.join(os.homedir(), '.config', 'zed', 'settings.json')
    }
  },
  'zed-preview': {
    label: 'Zed Preview',
    config: {
      win32: path.join(os.homedir(), 'AppData', 'Roaming', 'Zed-Preview', 'settings.json'),
      darwin: path.join(os.homedir(), 'Library', 'Application Support', 'Zed-Preview', 'settings.json'),
      linux: path.join(os.homedir(), '.config', 'zed-preview', 'settings.json')
    }
  },
  'cline': {
    label: 'Cline (VSCode Extension)',
    config: {
      win32: path.join(os.homedir(), 'AppData', 'Roaming', 'Code', 'User', 'globalStorage', 'saoudrizwan.claude-dev', 'settings', 'cline_mcp_settings.json'),
      darwin: path.join(os.homedir(), 'Library', 'Application Support', 'Code', 'User', 'globalStorage', 'saoudrizwan.claude-dev', 'settings', 'cline_mcp_settings.json'),
      linux: path.join(os.homedir(), '.config', 'Code', 'User', 'globalStorage', 'saoudrizwan.claude-dev', 'settings', 'cline_mcp_settings.json')
    }
  },
  'roo-cline': {
    label: 'Roo Cline (VSCode Extension)',
    config: {
      win32: path.join(os.homedir(), 'AppData', 'Roaming', 'Code', 'User', 'globalStorage', 'rooveterinaryinc.roo-cline', 'settings', 'cline_mcp_settings.json'),
      darwin: path.join(os.homedir(), 'Library', 'Application Support', 'Code', 'User', 'globalStorage', 'rooveterinaryinc.roo-cline', 'settings', 'cline_mcp_settings.json'),
      linux: path.join(os.homedir(), '.config', 'Code', 'User', 'globalStorage', 'rooveterinaryinc.roo-cline', 'settings', 'cline_mcp_settings.json')
    }
  },
  'copilot': {
    label: 'GitHub Copilot Chat',
    config: {
      win32: path.join(os.homedir(), 'AppData', 'Roaming', 'Code', 'User', 'settings.json'),
      darwin: path.join(os.homedir(), 'Library', 'Application Support', 'Code', 'User', 'settings.json'),
      linux: path.join(os.homedir(), '.config', 'Code', 'User', 'settings.json')
    }
  },
  'copilot-vs': {
    label: 'Visual Studio Copilot',
    config: {
      win32: path.join(os.homedir(), 'AppData', 'Roaming', 'Microsoft', 'VisualStudio', '17.0', 'settings.json'),
      darwin: path.join(os.homedir(), 'Library', 'Application Support', 'Visual Studio', '17.0', 'settings.json'),
      linux: null
    }
  },
  'intellij': {
    label: 'IntelliJ IDEA (AI Assistant)',
    config: {
      win32: path.join(os.homedir(), 'AppData', 'Roaming', 'JetBrains', 'IntelliJIdea2024.1', 'options', 'mcp.json'),
      darwin: path.join(os.homedir(), 'Library', 'Application Support', 'JetBrains', 'IntelliJIdea2024.1', 'options', 'mcp.json'),
      linux: path.join(os.homedir(), '.config', 'JetBrains', 'IntelliJIdea2024.1', 'options', 'mcp.json')
    }
  },
  'pycharm': {
    label: 'PyCharm (AI Assistant)',
    config: {
      win32: path.join(os.homedir(), 'AppData', 'Roaming', 'JetBrains', 'PyCharm2024.1', 'options', 'mcp.json'),
      darwin: path.join(os.homedir(), 'Library', 'Application Support', 'JetBrains', 'PyCharm2024.1', 'options', 'mcp.json'),
      linux: path.join(os.homedir(), '.config', 'JetBrains', 'PyCharm2024.1', 'options', 'mcp.json')
    }
  },
  'webstorm': {
    label: 'WebStorm (AI Assistant)',
    config: {
      win32: path.join(os.homedir(), 'AppData', 'Roaming', 'JetBrains', 'WebStorm2024.1', 'options', 'mcp.json'),
      darwin: path.join(os.homedir(), 'Library', 'Application Support', 'JetBrains', 'WebStorm2024.1', 'options', 'mcp.json'),
      linux: path.join(os.homedir(), '.config', 'JetBrains', 'WebStorm2024.1', 'options', 'mcp.json')
    }
  },
  'android-studio': {
    label: 'Android Studio (AI Assistant)',
    config: {
      win32: path.join(os.homedir(), 'AppData', 'Roaming', 'Google', 'AndroidStudio2024.1', 'options', 'mcp.json'),
      darwin: path.join(os.homedir(), 'Library', 'Application Support', 'Google', 'AndroidStudio2024.1', 'options', 'mcp.json'),
      linux: path.join(os.homedir(), '.config', 'Google', 'AndroidStudio2024.1', 'options', 'mcp.json')
    }
  },
  'xcode': {
    label: 'Xcode (Apple Intelligence)',
    config: {
      win32: null,
      darwin: path.join(os.homedir(), 'Library', 'Developer', 'Xcode', 'UserData', 'mcp.json'),
      linux: null
    }
  },
  'neovim': {
    label: 'Neovim (with AI plugins)',
    config: {
      win32: path.join(os.homedir(), 'AppData', 'Local', 'nvim', 'mcp.json'),
      darwin: path.join(os.homedir(), '.config', 'nvim', 'mcp.json'),
      linux: path.join(os.homedir(), '.config', 'nvim', 'mcp.json')
    }
  },
  'vim': {
    label: 'Vim',
    config: {
      win32: path.join(os.homedir(), '_vimrc'),
      darwin: path.join(os.homedir(), '.vimrc'),
      linux: path.join(os.homedir(), '.vimrc')
    }
  },
  'emacs': {
    label: 'Emacs',
    config: {
      win32: path.join(os.homedir(), '_emacs'),
      darwin: path.join(os.homedir(), '.emacs'),
      linux: path.join(os.homedir(), '.emacs')
    }
  },
  'sublime': {
    label: 'Sublime Text',
    config: {
      win32: path.join(os.homedir(), 'AppData', 'Roaming', 'Sublime Text', 'Packages', 'User', 'mcp.json'),
      darwin: path.join(os.homedir(), 'Library', 'Application Support', 'Sublime Text', 'Packages', 'User', 'mcp.json'),
      linux: path.join(os.homedir(), '.config', 'sublime-text', 'Packages', 'User', 'mcp.json')
    }
  },
  'atom': {
    label: 'Atom',
    config: {
      win32: path.join(os.homedir(), '.atom', 'config.cson'),
      darwin: path.join(os.homedir(), '.atom', 'config.cson'),
      linux: path.join(os.homedir(), '.atom', 'config.cson')
    }
  },
  'brackets': {
    label: 'Brackets',
    config: {
      win32: path.join(os.homedir(), 'AppData', 'Roaming', 'Brackets', 'brackets.json'),
      darwin: path.join(os.homedir(), 'Library', 'Application Support', 'Brackets', 'brackets.json'),
      linux: path.join(os.homedir(), '.config', 'Brackets', 'brackets.json')
    }
  },
  'notion-ai': {
    label: 'Notion AI',
    config: {
      win32: path.join(os.homedir(), 'AppData', 'Roaming', 'Notion', 'mcp.json'),
      darwin: path.join(os.homedir(), 'Library', 'Application Support', 'Notion', 'mcp.json'),
      linux: path.join(os.homedir(), '.config', 'Notion', 'mcp.json')
    }
  },
  'obsidian': {
    label: 'Obsidian (with AI plugins)',
    config: {
      win32: path.join(os.homedir(), 'AppData', 'Roaming', 'obsidian', 'mcp.json'),
      darwin: path.join(os.homedir(), 'Library', 'Application Support', 'obsidian', 'mcp.json'),
      linux: path.join(os.homedir(), '.config', 'obsidian', 'mcp.json')
    }
  },
  'logseq': {
    label: 'Logseq',
    config: {
      win32: path.join(os.homedir(), 'AppData', 'Roaming', 'logseq', 'mcp.json'),
      darwin: path.join(os.homedir(), 'Library', 'Application Support', 'logseq', 'mcp.json'),
      linux: path.join(os.homedir(), '.config', 'logseq', 'mcp.json')
    }
  },
  'custom': {
    label: 'Custom (specify path)',
    config: {
      win32: null,
      darwin: null,
      linux: null
    }
  }
}

export function getConfigPath(editor, customPath = null) {
  if (editor === 'custom' && customPath) {
    return customPath
  }
  const platform = process.platform
  const editorConfig = EDITORS[editor]
  if (!editorConfig) return null
  return editorConfig.config[platform] || editorConfig.config['linux']
}
