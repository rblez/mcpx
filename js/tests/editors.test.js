import { describe, it } from 'node:test'
import assert from 'node:assert'
import { EDITORS, getConfigPath } from '../src/utils/editors.js'

describe('editors', () => {
  describe('EDITORS', () => {
    it('should contain Claude Desktop', () => {
      assert.ok('claude-desktop' in EDITORS)
      assert.strictEqual(EDITORS['claude-desktop'].label, 'Claude Desktop')
    })
    
    it('should contain Cursor', () => {
      assert.ok('cursor' in EDITORS)
      assert.strictEqual(EDITORS['cursor'].label, 'Cursor')
    })
    
    it('should contain VSCode', () => {
      assert.ok('vscode' in EDITORS)
      assert.strictEqual(EDITORS['vscode'].label, 'VSCode (Copilot Chat)')
    })
    
    it('should contain Windsurf', () => {
      assert.ok('windsurf' in EDITORS)
      assert.strictEqual(EDITORS['windsurf'].label, 'Windsurf')
    })
    
    it('should contain Zed', () => {
      assert.ok('zed' in EDITORS)
      assert.strictEqual(EDITORS['zed'].label, 'Zed')
    })
    
    it('should contain Cline', () => {
      assert.ok('cline' in EDITORS)
      assert.strictEqual(EDITORS['cline'].label, 'Cline (VSCode Extension)')
    })
    
    it('should contain custom option', () => {
      assert.ok('custom' in EDITORS)
      assert.strictEqual(EDITORS['custom'].label, 'Custom (specify path)')
    })
    
    it('should have config paths for all platforms', () => {
      for (const [key, editor] of Object.entries(EDITORS)) {
        assert.ok('config' in editor, `${key} missing config`)
        assert.ok('win32' in editor.config || editor.config.win32 === null, `${key} missing win32`)
        assert.ok('darwin' in editor.config || editor.config.darwin === null, `${key} missing darwin`)
        assert.ok('linux' in editor.config || editor.config.linux === null, `${key} missing linux`)
      }
    })
  })
  
  describe('getConfigPath', () => {
    it('should return null for invalid editor', () => {
      const result = getConfigPath('invalid-editor')
      assert.strictEqual(result, null)
    })
    
    it('should return custom path for custom editor', () => {
      const customPath = '/custom/path/to/config.json'
      const result = getConfigPath('custom', customPath)
      assert.strictEqual(result, customPath)
    })
    
    it('should return path for valid editor', () => {
      // This will return different paths based on the platform running the test
      const result = getConfigPath('claude-desktop')
      assert.ok(result === null || typeof result === 'string')
    })
  })
})
