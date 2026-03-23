import fs from 'fs'
import path from 'path'
import os from 'os'

export const MCPX_DIR = path.join(os.homedir(), '.mcpx')
export const STATE_FILE = path.join(MCPX_DIR, 'state.json')
export const REGISTRY_FILE = new URL('../../../registry.json', import.meta.url).pathname

export function loadRegistry() {
  const raw = fs.readFileSync(REGISTRY_FILE, 'utf-8')
  return JSON.parse(raw)
}

export function loadState() {
  if (!fs.existsSync(STATE_FILE)) return { installed: {} }
  return JSON.parse(fs.readFileSync(STATE_FILE, 'utf-8'))
}

export function saveState(state) {
  if (!fs.existsSync(MCPX_DIR)) fs.mkdirSync(MCPX_DIR, { recursive: true })
  fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2))
}

export function loadEditorConfig(configPath) {
  if (!fs.existsSync(configPath)) return { mcpServers: {} }
  try {
    return JSON.parse(fs.readFileSync(configPath, 'utf-8'))
  } catch {
    return { mcpServers: {} }
  }
}

export function saveEditorConfig(configPath, config) {
  const dir = path.dirname(configPath)
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2))
}
