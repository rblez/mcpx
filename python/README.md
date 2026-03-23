# mcpx

> CLI to install and configure MCP servers in any editor. No marketplace. No friction. Just works.

## Installation

```bash
pip install mcpx
```

## Quick Start

```bash
# Browse available MCP servers
mcpx search

# Add an MCP server
mcpx add github
mcpx add supabase

# List installed MCPs
mcpx list

# Check your setup
mcpx doctor
```

## Features

- 🔧 **Universal Editor Support** - Works with 30+ editors and IDEs
- 📦 **80+ MCP Servers** - Pre-configured registry of popular MCP servers
- 🎨 **Beautiful UI** - Clean, colorful terminal interface
- 🔐 **Secure** - Secrets stored locally, never transmitted
- 🚀 **Zero Config** - Automatic editor detection and configuration

## Supported Editors

- Claude Desktop
- Cursor
- VSCode (Copilot Chat)
- Windsurf
- Zed
- Trae
- Cline / Roo Cline
- JetBrains IDEs (IntelliJ, PyCharm, WebStorm)
- And 20+ more!

## Commands

| Command | Description |
|---------|-------------|
| `mcpx init` | Initialize mcpx configuration |
| `mcpx search [query]` | Search for MCP servers |
| `mcpx info <name>` | Show MCP details |
| `mcpx add <name>` | Add an MCP server |
| `mcpx list` | List installed MCPs |
| `mcpx remove <name>` | Remove an MCP server |
| `mcpx doctor` | Diagnose your setup |

## License

MIT License

## Links

- [GitHub Repository](https://github.com/rblez/mcpx)
- [Issue Tracker](https://github.com/rblez/mcpx/issues)
