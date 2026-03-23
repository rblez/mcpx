# mcpx

> CLI to install and configure MCP servers in any editor. No marketplace. No friction. Just works.

[![npm version](https://img.shields.io/npm/v/mcpx.svg)](https://www.npmjs.com/package/mcpx)
[![PyPI version](https://img.shields.io/pypi/v/mcpx.svg)](https://pypi.org/project/mcpx/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Quick Start

```bash
# Install via npm
npm install -g mcpx

# Or install via pip
pip install mcpx

# Browse available MCP servers
mcpx search

# Add an MCP server
mcpx add github
mcpx add supabase
mcpx add filesystem

# List installed MCPs
mcpx list

# Check your setup
mcpx doctor
```

## Features

- 🔧 **Universal Editor Support** - Works with 30+ editors and IDEs
- 📦 **100+ MCP Servers** - Pre-configured registry of popular MCP servers
- 🎨 **Beautiful UI** - Clean, colorful terminal interface
- 🔐 **Secure** - Secrets stored locally, never transmitted
- 🚀 **Zero Config** - Automatic editor detection and configuration
- 📝 **Interactive Setup** - Step-by-step guidance with URL helpers

## Supported Editors

### AI Code Editors
| Editor | Platform |
|--------|----------|
| Claude Desktop | Windows, macOS, Linux |
| Claude Code (CLI) | All platforms |
| Cursor | Windows, macOS, Linux |
| Windsurf | Windows, macOS, Linux |
| Trae | Windows, macOS, Linux |

### VSCode Extensions
| Extension | Description |
|-----------|-------------|
| VSCode (Copilot Chat) | GitHub Copilot integration |
| VSCode Insiders | Preview version |
| Cline | AI coding assistant |
| Roo Cline | Enhanced Cline fork |

### JetBrains IDEs
| IDE | MCP Support |
|-----|-------------|
| IntelliJ IDEA | AI Assistant |
| PyCharm | AI Assistant |
| WebStorm | AI Assistant |
| Android Studio | AI Assistant |

### Other Editors
| Editor | Type |
|--------|------|
| Zed | Modern code editor |
| Zed Preview | Preview builds |
| Neovim | With AI plugins |
| Vim | Classic editor |
| Emacs | Extensible editor |
| Sublime Text | Fast editor |
| Xcode | Apple Intelligence |
| Visual Studio | Copilot integration |

### Note-Taking Apps
| App | Description |
|-----|-------------|
| Obsidian | With AI plugins |
| Logseq | Privacy-first |
| Notion AI | Built-in AI |

## Available MCP Servers

### Databases
| Server | Description |
|--------|-------------|
| `postgres` | PostgreSQL database access |
| `mysql` | MySQL database queries |
| `mongodb` | MongoDB operations |
| `sqlite` | SQLite database access |
| `redis` | Redis key-value store |
| `neo4j` | Neo4j graph database |
| `snowflake` | Snowflake data warehouse |
| `databricks` | Databricks notebooks |
| `bigquery` | Google BigQuery |
| `elastic` | Elasticsearch queries |

### Cloud Providers
| Server | Description |
|--------|-------------|
| `aws` | AWS resource management |
| `gcp` | Google Cloud Platform |
| `azure` | Azure resource management |
| `cloudflare` | Cloudflare Workers, D1, R2 |
| `vercel` | Vercel deployments |
| `netlify` | Netlify sites |
| `railway` | Railway projects |
| `render` | Render services |
| `heroku` | Heroku apps |
| `firebase` | Firebase projects |

### Version Control
| Server | Description |
|--------|-------------|
| `github` | GitHub repos, issues, PRs |
| `gitlab` | GitLab repos, issues, MRs |
| `git` | Git operations |

### Communication
| Server | Description |
|--------|-------------|
| `slack` | Slack messaging |
| `discord` | Discord bot operations |
| `telegram` | Telegram bot |
| `twilio` | SMS and calls |
| `sendgrid` | Email sending |
| `whatsapp` | WhatsApp messaging |
| `gmail` | Gmail access |
| `outlook` | Outlook mail |

### Project Management
| Server | Description |
|--------|-------------|
| `linear` | Linear issues |
| `jira` | Jira issues |
| `notion` | Notion pages |
| `asana` | Asana tasks |
| `trello` | Trello boards |
| `clickup` | ClickUp tasks |
| `monday` | Monday.com |
| `zendesk` | Zendesk tickets |
| `hubspot` | HubSpot CRM |
| `salesforce` | Salesforce |
| `airtable` | Airtable bases |

### Development Tools
| Server | Description |
|--------|-------------|
| `docker` | Docker containers |
| `kubernetes` | K8s clusters |
| `terraform` | Infrastructure as code |
| `openapi` | OpenAPI/Swagger APIs |
| `graphql` | GraphQL endpoints |
| `puppeteer` | Browser automation |
| `playwright` | Cross-browser testing |

### Monitoring & Observability
| Server | Description |
|--------|-------------|
| `sentry` | Error tracking |
| `datadog` | Monitoring platform |
| `grafana` | Data visualization |

### AI/ML Services
| Server | Description |
|--------|-------------|
| `openai` | OpenAI APIs |
| `anthropic` | Anthropic APIs |
| `huggingface` | ML models |
| `replicate` | Cloud ML models |
| `elevenlabs` | Text-to-speech |

### Search & Web
| Server | Description |
|--------|-------------|
| `web-search` | Multi-engine search |
| `brave-search` | Brave Search API |
| `google-maps` | Maps and places |
| `fetch` | URL fetching |
| `sitemap` | Sitemap crawler |

### Productivity
| Server | Description |
|--------|-------------|
| `filesystem` | Local file access |
| `memory` | Persistent memory |
| `calculator` | Math calculations |
| `time` | Time and timezone |
| `calendar` | Google Calendar |
| `obsidian` | Obsidian vaults |
| `logseq` | Logseq graphs |

### Media
| Server | Description |
|--------|-------------|
| `figma` | Figma files |
| `youtube` | YouTube videos |
| `spotify` | Spotify playback |
| `image` | Image analysis |
| `pdf` | PDF extraction |
| `ocr` | Text extraction |

### Finance
| Server | Description |
|--------|-------------|
| `stripe` | Payment processing |
| `shopify` | E-commerce |

### Social Media
| Server | Description |
|--------|-------------|
| `twitter` | Twitter/X posts |
| `mastodon` | Mastodon toots |
| `bluesky` | Bluesky posts |
| `reddit` | Reddit posts |
| `linkedin` | LinkedIn posts |

### Smart Home
| Server | Description |
|--------|-------------|
| `home-assistant` | Home automation |
| `philips-hue` | Hue lights |
| `sonos` | Sonos speakers |

### Testing
| Server | Description |
|--------|-------------|
| `everything` | Test MCP server |

## Installation

### Node.js (npm)

```bash
npm install -g mcpx
```

**Requirements:**
- Node.js 18 or higher
- npm 9 or higher

### Python (pip)

```bash
pip install mcpx
```

**Requirements:**
- Python 3.10 or higher
- pip 21 or higher

## Commands

### `mcpx init`

Initialize mcpx and create necessary configuration directories.

```bash
mcpx init
```

### `mcpx search [query]`

Search for MCP servers in the registry.

```bash
# List all available MCPs
mcpx search

# Search by name or description
mcpx search database
mcpx search github
```

### `mcpx info <name>`

Show detailed information about an MCP server.

```bash
mcpx info github
mcpx info supabase
```

Output includes:
- Server name and description
- Required fields/credentials
- NPM package name
- Command configuration
- Environment variables

### `mcpx add <name>`

Add and configure an MCP server.

```bash
mcpx add github
```

The interactive wizard will:
1. Ask which editor you use
2. Open credential URLs automatically
3. Prompt for required fields
4. Configure your editor automatically

### `mcpx list`

List all installed MCP servers.

```bash
mcpx list
```

Shows:
- Installed MCP names
- Target editor
- Description
- Total count

### `mcpx remove <name>`

Remove an MCP server configuration.

```bash
mcpx remove github
```

### `mcpx doctor`

Diagnose your MCP setup.

```bash
mcpx doctor
```

Checks:
- Node.js/Python version
- npx availability
- Installed MCP count
- Editor config files

## Configuration

### Config Locations

mcpx stores configuration in:

| Platform | Location |
|----------|----------|
| macOS | `~/.mcpx/state.json` |
| Linux | `~/.mcpx/state.json` |
| Windows | `%USERPROFILE%\.mcpx\state.json` |

### Editor Config Paths

Each editor has its own config location:

**Claude Desktop:**
- macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
- Windows: `%APPDATA%\Claude\claude_desktop_config.json`
- Linux: `~/.config/Claude/claude_desktop_config.json`

**Cursor:**
- macOS: `~/Library/Application Support/Cursor/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json`
- Windows: `%APPDATA%\Cursor\User\globalStorage\saoudrizwan.claude-dev\settings\cline_mcp_settings.json`

**VSCode:**
- macOS: `~/Library/Application Support/Code/User/settings.json`
- Windows: `%APPDATA%\Code\User\settings.json`
- Linux: `~/.config/Code/User/settings.json`

### Manual Configuration

You can manually edit your editor's MCP config. Example for Claude Desktop:

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "your_token_here"
      }
    }
  }
}
```

## Examples

### Setting up GitHub MCP

```bash
# 1. Add the GitHub MCP server
mcpx add github

# 2. Select your editor from the list
# 3. The browser will open to create a GitHub token
# 4. Paste the token when prompted
# 5. Restart your editor
```

### Setting up Supabase MCP

```bash
mcpx add supabase
# Follow the interactive prompts
```

### Setting up a Database MCP

```bash
# PostgreSQL
mcpx add postgres
# Enter your DATABASE_URL

# MongoDB
mcpx add mongodb
# Enter your MONGODB_URI
```

### Setting up Multiple MCPs

```bash
mcpx add github
mcpx add filesystem
mcpx add postgres
mcpx add slack
mcpx list
```

## Troubleshooting

### MCP not appearing in editor

1. Restart your editor after adding MCPs
2. Run `mcpx doctor` to check configuration
3. Verify the config file exists at the expected path
4. Check editor settings for MCP support

### Credential issues

1. Ensure tokens have correct permissions
2. Check token expiration dates
3. Regenerate tokens if needed
4. Use `mcpx remove <name>` and re-add

### Config file not found

Some editors need to be opened at least once before config files are created. Open your editor and then run mcpx again.

### Custom config path

For editors not in the default list, use the "Custom" option and provide the full path to your config file.

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│                      mcpx CLI                           │
├─────────────────────────────────────────────────────────┤
│  Commands                                               │
│  ├── search    - Browse registry                       │
│  ├── info      - Show MCP details                      │
│  ├── add       - Interactive setup                     │
│  ├── list      - Show installed MCPs                   │
│  ├── remove    - Remove configuration                  │
│  ├── doctor    - Diagnose issues                       │
│  └── init      - Initialize mcpx                       │
├─────────────────────────────────────────────────────────┤
│  Registry (registry.json)                               │
│  ├── Server definitions                                 │
│  ├── Required fields                                    │
│  └── Configuration templates                            │
├─────────────────────────────────────────────────────────┤
│  State (~/.mcpx/state.json)                             │
│  └── Installed MCP tracking                             │
├─────────────────────────────────────────────────────────┤
│  Editor Configs                                         │
│  ├── Claude Desktop                                     │
│  ├── Cursor                                             │
│  ├── VSCode                                             │
│  └── 30+ more...                                        │
└─────────────────────────────────────────────────────────┘
```

## Registry Format

MCP servers are defined in `registry.json`:

```json
{
  "github": {
    "name": "GitHub",
    "description": "Manage repos, issues and PRs",
    "npm": "@modelcontextprotocol/server-github",
    "fields": [
      {
        "key": "GITHUB_PERSONAL_ACCESS_TOKEN",
        "label": "Personal Access Token",
        "url": "https://github.com/settings/tokens",
        "secret": true
      }
    ],
    "config": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "${GITHUB_PERSONAL_ACCESS_TOKEN}"
      }
    }
  }
}
```

## Contributing

### Adding a new MCP Server

1. Fork the repository
2. Add entry to `registry.json`
3. Test with `mcpx add <your-server>`
4. Submit a PR

### Adding a new Editor

1. Add editor to `js/src/utils/editors.js`
2. Add editor to `python/mcpx/utils/editors.py`
3. Include config paths for all platforms
4. Submit a PR

### Development

```bash
# Clone the repo
git clone https://github.com/rblez/mcpx.git
cd mcpx

# Install JS dependencies
cd js
npm install

# Link for local development
npm link

# Test your changes
mcpx search
mcpx add <test-server>
```

## License

MIT License - See [LICENSE](LICENSE) for details.

## Credits

Created by [rblez](https://github.com/rblez)

Built on the [Model Context Protocol](https://modelcontextprotocol.io/) specification.

## Support

- 📖 [Documentation](https://github.com/rblez/mcpx#readme)
- 🐛 [Issue Tracker](https://github.com/rblez/mcpx/issues)
- 💬 [Discussions](https://github.com/rblez/mcpx/discussions)

---

<p align="center">
  <strong>mcpx</strong> — No marketplace. No friction. Just works.
</p>
