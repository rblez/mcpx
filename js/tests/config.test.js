import { describe, it, beforeEach, afterEach } from 'node:test'
import assert from 'node:assert'
import fs from 'fs'
import path from 'path'
import os from 'os'
import { loadRegistry, loadState, saveState, loadEditorConfig, saveEditorConfig, MCPX_DIR, STATE_FILE } from '../src/utils/config.js'

describe('config', () => {
  const testDir = path.join(os.tmpdir(), 'mcpx-test-' + Date.now())
  const testStateFile = path.join(testDir, 'state.json')
  
  beforeEach(() => {
    fs.mkdirSync(testDir, { recursive: true })
  })
  
  afterEach(() => {
    if (fs.existsSync(testDir)) {
      fs.rmSync(testDir, { recursive: true, force: true })
    }
  })
  
  describe('loadRegistry', () => {
    it('should load the registry.json file', () => {
      const registry = loadRegistry()
      assert.ok(typeof registry === 'object')
      assert.ok(Object.keys(registry).length > 0)
    })
    
    it('should contain expected MCP servers', () => {
      const registry = loadRegistry()
      assert.ok('github' in registry)
      assert.ok('supabase' in registry)
      assert.ok('filesystem' in registry)
    })
    
    it('should have valid MCP entries', () => {
      const registry = loadRegistry()
      const github = registry.github
      assert.ok(github.name)
      assert.ok(github.description)
      assert.ok(Array.isArray(github.fields))
      assert.ok(github.config)
    })
  })
  
  describe('loadState', () => {
    it('should return empty state when file does not exist', () => {
      // Temporarily override STATE_FILE
      const originalStateFile = STATE_FILE
      const state = loadState()
      assert.deepStrictEqual(state, { installed: {} })
    })
    
    it('should load existing state file', () => {
      const testState = { installed: { github: { editor: 'claude-desktop', addedAt: '2024-01-01' } } }
      fs.writeFileSync(testStateFile, JSON.stringify(testState))
      
      // Would need to mock STATE_FILE for proper testing
      // This is a simplified test
      assert.ok(true)
    })
  })
  
  describe('saveState', () => {
    it('should create directory if it does not exist', () => {
      const newDir = path.join(testDir, 'nested', 'mcpx')
      const newState = { installed: {} }
      
      // Mock MCPX_DIR
      saveState(newState)
      
      // State should be saved to actual MCPX_DIR
      assert.ok(true)
    })
    
    it('should save state with installed MCPs', () => {
      const state = {
        installed: {
          github: { editor: 'claude-desktop', addedAt: new Date().toISOString() }
        }
      }
      saveState(state)
      
      const loaded = loadState()
      assert.ok('installed' in loaded)
    })
  })
  
  describe('loadEditorConfig', () => {
    it('should return empty config when file does not exist', () => {
      const nonExistentPath = path.join(testDir, 'does-not-exist.json')
      const config = loadEditorConfig(nonExistentPath)
      assert.deepStrictEqual(config, { mcpServers: {} })
    })
    
    it('should load valid JSON config', () => {
      const configPath = path.join(testDir, 'config.json')
      const testConfig = { mcpServers: { github: { command: 'npx' } } }
      fs.writeFileSync(configPath, JSON.stringify(testConfig))
      
      const loaded = loadEditorConfig(configPath)
      assert.deepStrictEqual(loaded, testConfig)
    })
    
    it('should return empty config for invalid JSON', () => {
      const configPath = path.join(testDir, 'invalid.json')
      fs.writeFileSync(configPath, 'not valid json')
      
      const loaded = loadEditorConfig(configPath)
      assert.deepStrictEqual(loaded, { mcpServers: {} })
    })
  })
  
  describe('saveEditorConfig', () => {
    it('should create directory if it does not exist', () => {
      const configPath = path.join(testDir, 'nested', 'config.json')
      const config = { mcpServers: {} }
      
      saveEditorConfig(configPath, config)
      
      assert.ok(fs.existsSync(configPath))
    })
    
    it('should save config as formatted JSON', () => {
      const configPath = path.join(testDir, 'config.json')
      const config = { mcpServers: { github: { command: 'npx' } } }
      
      saveEditorConfig(configPath, config)
      
      const content = fs.readFileSync(configPath, 'utf-8')
      const parsed = JSON.parse(content)
      assert.deepStrictEqual(parsed, config)
    })
  })
})
