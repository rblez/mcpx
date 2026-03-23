import chalk from 'chalk'
import { loadRegistry } from '../utils/config.js'

export function infoCommand(name) {
  const registry = loadRegistry()
  
  if (!registry[name]) {
    console.log(chalk.red(`\n  ✗ "${name}" not found in registry.`))
    console.log(chalk.dim('  Run mcpx search to see available MCPs.\n'))
    process.exit(1)
  }
  
  const mcp = registry[name]
  
  console.log(chalk.bold.cyan('\n  ═══════════════════════════════════════════════════\n'))
  console.log(chalk.bold(`  ${mcp.name}`))
  console.log(chalk.dim(`  ${mcp.description}\n`))
  console.log(chalk.bold.cyan('  ═══════════════════════════════════════════════════\n'))
  
  console.log(chalk.bold('  ID:'), chalk.white(name))
  
  if (mcp.npm) {
    console.log(chalk.bold('  NPM Package:'), chalk.green(mcp.npm))
  } else {
    console.log(chalk.bold('  NPM Package:'), chalk.dim('Uses third-party package'))
  }
  
  const fields = mcp.fields || []
  if (fields.length > 0) {
    console.log(chalk.bold(`\n  Required Fields (${fields.length}):\n`))
    for (const field of fields) {
      const type = field.secret ? chalk.yellow('Secret') : chalk.dim('Public')
      const url = field.url ? chalk.blue(field.url) : chalk.dim('—')
      console.log(`    ${chalk.yellow('●')} ${chalk.bold(field.label)}`)
      console.log(`      Key: ${chalk.dim(field.key)}`)
      console.log(`      Type: ${type}`)
      if (field.url) {
        console.log(`      URL: ${url}`)
      }
      console.log()
    }
  } else {
    console.log(chalk.bold('\n  Required Fields:'), chalk.green('None (no configuration needed)'))
  }
  
  const config = mcp.config || {}
  console.log(chalk.bold('\n  Command:'), chalk.white(config.command || 'N/A'))
  
  if (config.args && config.args.length > 0) {
    console.log(chalk.bold('  Args:'))
    for (const arg of config.args) {
      console.log(chalk.dim(`    • ${arg}`))
    }
  }
  
  if (config.env) {
    console.log(chalk.bold('\n  Environment Variables:'))
    for (const [envKey, envVal] of Object.entries(config.env)) {
      console.log(chalk.dim(`    • ${envKey}=${envVal}`))
    }
  }
  
  console.log()
}
