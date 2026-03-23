import chalk from 'chalk'
import fs from 'fs'
import { MCPX_DIR, STATE_FILE } from '../utils/config.js'

export function initCommand() {
  console.log(chalk.bold.cyan('\n  ═══════════════════════════════════════════════════\n'))
  console.log(chalk.bold('  Initializing mcpx'))
  console.log(chalk.bold.cyan('  ═══════════════════════════════════════════════════\n'))
  
  // Create mcpx directory
  if (!fs.existsSync(MCPX_DIR)) {
    fs.mkdirSync(MCPX_DIR, { recursive: true })
    console.log(`  ${chalk.green('✓')} Created directory: ${chalk.dim(MCPX_DIR)}`)
  } else {
    console.log(`  ${chalk.dim('✓')} Directory exists: ${chalk.dim(MCPX_DIR)}`)
  }
  
  // Create state file if not exists
  if (!fs.existsSync(STATE_FILE)) {
    fs.writeFileSync(STATE_FILE, JSON.stringify({ installed: {} }, null, 2))
    console.log(`  ${chalk.green('✓')} Created state file: ${chalk.dim(STATE_FILE)}`)
  } else {
    console.log(`  ${chalk.dim('✓')} State file exists: ${chalk.dim(STATE_FILE)}`)
  }
  
  console.log()
  console.log(chalk.bold.green('  ═══════════════════════════════════════════════════'))
  console.log(chalk.bold.green('  ✓ mcpx is ready to use!'))
  console.log(chalk.bold.green('  ═══════════════════════════════════════════════════\n'))
  console.log(chalk.dim('  Run mcpx search to browse available MCP servers.'))
  console.log(chalk.dim('  Run mcpx add <name> to install an MCP server.\n'))
}
