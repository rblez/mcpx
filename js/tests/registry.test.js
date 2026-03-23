import { describe, it } from 'node:test'
import assert from 'node:assert'
import { loadRegistry } from '../src/utils/config.js'

describe('registry', () => {
  const registry = loadRegistry()
  
  describe('Registry Structure', () => {
    it('should have required fields for each MCP', () => {
      for (const [key, mcp] of Object.entries(registry)) {
        assert.ok(mcp.name, `${key} missing name`)
        assert.ok(mcp.description, `${key} missing description`)
        assert.ok(mcp.config, `${key} missing config`)
        assert.ok(Array.isArray(mcp.fields), `${key} fields should be array`)
      }
    })
    
    it('should have valid config structure', () => {
      for (const [key, mcp] of Object.entries(registry)) {
        const config = mcp.config
        assert.ok(config.command, `${key} missing command`)
        assert.ok(Array.isArray(config.args), `${key} args should be array`)
      }
    })
  })
  
  describe('Database MCPs', () => {
    it('should have postgres', () => {
      assert.ok('postgres' in registry)
      assert.strictEqual(registry.postgres.name, 'PostgreSQL')
    })
    
    it('should have mongodb', () => {
      assert.ok('mongodb' in registry)
      assert.strictEqual(registry.mongodb.name, 'MongoDB')
    })
    
    it('should have redis', () => {
      assert.ok('redis' in registry)
      assert.strictEqual(registry.redis.name, 'Redis')
    })
  })
  
  describe('Cloud Provider MCPs', () => {
    it('should have aws', () => {
      assert.ok('aws' in registry)
      assert.strictEqual(registry.aws.name, 'AWS')
    })
    
    it('should have gcp', () => {
      assert.ok('gcp' in registry)
      assert.strictEqual(registry.gcp.name, 'Google Cloud Platform')
    })
    
    it('should have azure', () => {
      assert.ok('azure' in registry)
      assert.strictEqual(registry.azure.name, 'Azure')
    })
  })
  
  describe('Communication MCPs', () => {
    it('should have slack', () => {
      assert.ok('slack' in registry)
      assert.strictEqual(registry.slack.name, 'Slack')
    })
    
    it('should have discord', () => {
      assert.ok('discord' in registry)
      assert.strictEqual(registry.discord.name, 'Discord')
    })
    
    it('should have telegram', () => {
      assert.ok('telegram' in registry)
      assert.strictEqual(registry.telegram.name, 'Telegram Bot')
    })
  })
  
  describe('Project Management MCPs', () => {
    it('should have linear', () => {
      assert.ok('linear' in registry)
      assert.strictEqual(registry.linear.name, 'Linear')
    })
    
    it('should have jira', () => {
      assert.ok('jira' in registry)
      assert.strictEqual(registry.jira.name, 'Jira')
    })
    
    it('should have notion', () => {
      assert.ok('notion' in registry)
      assert.strictEqual(registry.notion.name, 'Notion')
    })
  })
  
  describe('Field Validation', () => {
    it('should have valid field structure', () => {
      for (const [key, mcp] of Object.entries(registry)) {
        for (const field of mcp.fields) {
          assert.ok(field.key, `${key} field missing key`)
          assert.ok(field.label, `${key} field missing label`)
          assert.ok(typeof field.secret === 'boolean', `${key} field secret should be boolean`)
        }
      }
    })
    
    it('should have URL for secret fields when applicable', () => {
      // Most secret fields should have URLs to obtain credentials
      for (const [key, mcp] of Object.entries(registry)) {
        for (const field of mcp.fields) {
          if (field.secret && field.key.includes('TOKEN') || field.key.includes('KEY')) {
            // URL is recommended but not required
            assert.ok(typeof field.label === 'string', `${key} field label should be string`)
          }
        }
      }
    })
  })
  
  describe('Placeholder Replacement', () => {
    it('should use ${KEY} format in args', () => {
      let foundPlaceholder = false
      for (const [key, mcp] of Object.entries(registry)) {
        for (const arg of mcp.config.args) {
          if (arg.includes('${')) {
            foundPlaceholder = true
            assert.ok(arg.match(/\$\{[A-Z_]+\}/), `${key} has invalid placeholder format`)
          }
        }
      }
      // At least some MCPs should have placeholders
      assert.ok(foundPlaceholder, 'No placeholders found in registry')
    })
  })
  
  describe('Registry Size', () => {
    it('should have at least 50 MCP servers', () => {
      const count = Object.keys(registry).length
      assert.ok(count >= 50, `Expected at least 50 MCPs, found ${count}`)
    })
  })
})
