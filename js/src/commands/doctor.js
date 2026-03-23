import chalk from 'chalk'
import fs from 'fs'
import { execSync } from 'child_process'
import { loadState, loadEditorConfig } from '../utils/config.js'
import { getConfigPath, EDITORS } from '../utils/editors.js'

export function doctorCommand() {
  console.log(chalk.bold.cyan('\n  ═══════════════════════════════════════════════════'))
  console.log(chalk.bold('  mcpx doctor'))
  console.log(chalk.bold.cyan('  ═══════════════════════════════════════════════════\n'))

  const checks = []

  // Node version
  const nodeVersion = process.version
  const nodeMajor = parseInt(nodeVersion.slice(1).split('.')[0])
  checks.push({
    label: `Node.js ${nodeVersion}`,
    ok: nodeMajor >= 18
  })

  // npx available
  try {
    execSync('npx --version', { stdio: 'pipe' })
    checks.push({ label: 'npx available', ok: true })
  } catch {
    checks.push({ label: 'npx not found', ok: false })
  }

  // State
  const state = loadState()
  const installedCount = Object.keys(state.installed).length
  checks.push({ label: `${installedCount} MCP(s) installed`, ok: true })

  // Config files
  for (const [key, editor] of Object.entries(EDITORS)) {
    const installed = Object.values(state.installed).filter(i => i.editor === key)
    if (installed.length === 0) continue

    const configPath = getConfigPath(key)
    if (!configPath) continue

    const exists = fs.existsSync(configPath)
    const editorConfig = exists ? loadEditorConfig(configPath) : {}
    const mcpCount = Object.keys(editorConfig.mcpServers || {}).length
    checks.push({
      label: `${editor.label} config (${mcpCount} MCP(s))`,
      ok: exists
    })
  }

  for (const check of checks) {
    const icon = check.ok ? chalk.green('✓') : chalk.red('✗')
    console.log(`  ${icon} ${check.label}`)
  }

  const allOk = checks.every(c => c.ok)
  
  console.log()
  if (allOk) {
    console.log(chalk.green('  All checks passed.\n'))
  } else {
    console.log(chalk.red('  Some checks failed. Fix the issues above.\n'))
  }
}
