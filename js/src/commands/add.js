import inquirer from 'inquirer'
import chalk from 'chalk'
import open from 'open'
import { loadRegistry, loadState, saveState, loadEditorConfig, saveEditorConfig } from '../utils/config.js'
import { EDITORS, getConfigPath } from '../utils/editors.js'

export async function addCommand(name) {
  const registry = loadRegistry()
  const mcp = registry[name]

  if (!mcp) {
    console.log(chalk.red(`\n  ✗ "${name}" not found in registry.`))
    console.log(chalk.dim('  Run mcpx search to see available MCPs.\n'))
    process.exit(1)
  }

  // Header
  console.log(chalk.bold.cyan('\n  ═══════════════════════════════════════════════════\n'))
  console.log(chalk.bold(`  Adding ${chalk.cyan(mcp.name)}`))
  console.log(chalk.dim(`  ${mcp.description}\n`))
  console.log(chalk.bold.cyan('  ═══════════════════════════════════════════════════\n'))

  // 1. Select editor
  const { editor } = await inquirer.prompt([{
    type: 'list',
    name: 'editor',
    message: 'Which editor do you use?',
    choices: Object.entries(EDITORS).map(([key, val]) => ({
      name: val.label,
      value: key
    })),
    pageSize: Object.keys(EDITORS).length
  }])

  // 2. Collect fields
  const values = {}
  for (const field of mcp.fields) {
    if (field.url) {
      console.log(chalk.yellow(`\n  → Opening ${field.label} page...`))
      console.log(chalk.dim(`    ${field.url}\n`))
      await open(field.url)
    }

    const { value } = await inquirer.prompt([{
      type: field.secret ? 'password' : 'input',
      name: 'value',
      message: `Enter ${field.label}:`,
      validate: (v) => v.trim().length > 0 || 'Cannot be empty'
    }])
    values[field.key] = value.trim()
  }

  // 3. Build config entry
  const configEntry = JSON.parse(JSON.stringify(mcp.config))

  // Replace placeholders in args
  if (configEntry.args) {
    configEntry.args = configEntry.args.map(arg => {
      for (const [key, val] of Object.entries(values)) {
        arg = arg.replace(`\${${key}}`, val)
      }
      return arg
    })
  }

  // Replace placeholders in env
  if (configEntry.env) {
    for (const [envKey, envVal] of Object.entries(configEntry.env)) {
      for (const [key, val] of Object.entries(values)) {
        configEntry.env[envKey] = envVal.replace(`\${${key}}`, val)
      }
    }
  }

  // 4. Inject into editor config
  const configPath = getConfigPath(editor)
  const editorConfig = loadEditorConfig(configPath)
  if (!editorConfig.mcpServers) editorConfig.mcpServers = {}
  editorConfig.mcpServers[name] = configEntry
  saveEditorConfig(configPath, editorConfig)

  // 5. Save state
  const state = loadState()
  state.installed[name] = { editor, addedAt: new Date().toISOString() }
  saveState(state)

  // Success message
  console.log(chalk.bold.green('\n  ═══════════════════════════════════════════════════'))
  console.log(chalk.bold.green('  ✓ Success!'))
  console.log(chalk.bold.green('  ═══════════════════════════════════════════════════\n'))
  console.log(chalk.green(`  ${mcp.name} configured for ${EDITORS[editor].label}`))
  console.log(chalk.dim(`  Config written to: ${configPath}`))
  console.log(chalk.yellow(`\n  ↻ Restart your editor to apply changes.\n`))
}
