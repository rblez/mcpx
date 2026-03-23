import chalk from 'chalk'
import { loadState, saveState, loadEditorConfig, saveEditorConfig } from '../utils/config.js'
import { getConfigPath } from '../utils/editors.js'

export function removeCommand(name) {
  const state = loadState()

  if (!state.installed[name]) {
    console.log(chalk.red(`\n  ✗ "${name}" is not installed.\n`))
    process.exit(1)
  }

  const { editor } = state.installed[name]
  const configPath = getConfigPath(editor)
  const editorConfig = loadEditorConfig(configPath)

  if (editorConfig.mcpServers?.[name]) {
    delete editorConfig.mcpServers[name]
    saveEditorConfig(configPath, editorConfig)
  }

  delete state.installed[name]
  saveState(state)

  console.log(chalk.bold.yellow('\n  ═══════════════════════════════════════════════════'))
  console.log(chalk.bold.yellow('  Removed'))
  console.log(chalk.bold.yellow('  ═══════════════════════════════════════════════════\n'))
  console.log(chalk.green(`  ✓ "${name}" removed successfully.`))
  console.log(chalk.yellow(`\n  ↻ Restart your editor to apply changes.\n`))
}
