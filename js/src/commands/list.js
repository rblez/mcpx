import chalk from 'chalk'
import { loadState, loadRegistry } from '../utils/config.js'
import { EDITORS } from '../utils/editors.js'

export function listCommand() {
  const state = loadState()
  const registry = loadRegistry()
  const installed = Object.entries(state.installed)

  console.log(chalk.bold.cyan('\n  ═══════════════════════════════════════════════════'))
  console.log(chalk.bold('  Installed MCP Servers'))
  console.log(chalk.bold.cyan('  ═══════════════════════════════════════════════════\n'))

  if (installed.length === 0) {
    console.log(chalk.dim('  No MCPs installed yet. Run mcpx add <name>\n'))
    return
  }

  // Calculate max name length for alignment
  const maxNameLength = Math.max(...installed.map(([name]) => name.length))

  for (const [name, info] of installed) {
    const mcp = registry[name]
    const editorLabel = EDITORS[info.editor]?.label || info.editor
    const paddedName = name.padEnd(maxNameLength)
    console.log(`  ${chalk.green('●')} ${chalk.bold(paddedName)} ${chalk.dim(`→ ${editorLabel}`)}`)
    if (mcp) {
      console.log(chalk.dim(`    ${mcp.description}`))
    }
    console.log()
  }

  const available = Object.keys(registry)
  console.log(chalk.dim(`  Available: ${available.join(', ')}\n`))
  console.log(chalk.dim(`  Total: ${installed.length} installed, ${available.length} available\n`))
}
