import chalk from 'chalk'
import { loadRegistry } from '../utils/config.js'

export function searchCommand(query) {
  const registry = loadRegistry()
  
  console.log(chalk.bold('\n  Available MCP Servers\n'))
  
  let results = Object.entries(registry)
  
  if (query) {
    const queryLower = query.toLowerCase()
    results = results.filter(([key, mcp]) => 
      key.toLowerCase().includes(queryLower) ||
      mcp.name.toLowerCase().includes(queryLower) ||
      mcp.description.toLowerCase().includes(queryLower)
    )
  }
  
  if (results.length === 0) {
    if (query) {
      console.log(chalk.yellow(`  No MCPs found matching '${query}'.\n`))
    } else {
      console.log(chalk.dim('  No MCPs in registry.\n'))
    }
    return
  }
  
  // Calculate column widths
  const maxNameLength = Math.max(...results.map(([key]) => key.length))
  
  for (const [key, mcp] of results) {
    const paddedKey = key.padEnd(maxNameLength)
    console.log(`  ${chalk.green(paddedKey)}  ${chalk.dim(mcp.description)}`)
  }
  
  console.log()
  
  if (query) {
    console.log(chalk.dim(`  Found ${results.length} MCP(s) matching '${query}'.\n`))
  } else {
    console.log(chalk.dim(`  Total: ${results.length} MCP(s) available.\n`))
    console.log(chalk.dim('  Use mcpx search <query> to filter results.\n'))
  }
}
