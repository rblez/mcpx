#!/usr/bin/env node
import { program } from 'commander'
import { addCommand } from '../src/commands/add.js'
import { listCommand } from '../src/commands/list.js'
import { removeCommand } from '../src/commands/remove.js'
import { doctorCommand } from '../src/commands/doctor.js'
import { searchCommand } from '../src/commands/search.js'
import { infoCommand } from '../src/commands/info.js'
import { initCommand } from '../src/commands/init.js'

program
  .name('mcpx')
  .description('Install and configure MCP servers in any editor. No marketplace. No friction. Just works.')
  .version('0.2.0')

program
  .command('add <name>')
  .description('Add and configure an MCP server')
  .action(addCommand)

program
  .command('list')
  .description('List installed MCP servers')
  .action(listCommand)

program
  .command('remove <name>')
  .description('Remove an MCP server config')
  .action(removeCommand)

program
  .command('doctor')
  .description('Check your MCP setup')
  .action(doctorCommand)

program
  .command('search [query]')
  .description('Search for MCP servers in the registry')
  .action(searchCommand)

program
  .command('info <name>')
  .description('Show detailed information about an MCP server')
  .action(infoCommand)

program
  .command('init')
  .description('Initialize mcpx and create necessary directories')
  .action(initCommand)

program.parse()
