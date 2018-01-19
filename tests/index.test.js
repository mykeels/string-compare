const compareStrings = require ('../src/index')

const { assert } = require('chai')

describe('String.compare', () => {
    it('should return 0 if both strings are empty', () => {
        assert.equal(String.compare('', ''), 0)
    })

    it('should return 0 if one of strings is empty', () => {
        assert.equal(String.compare('hello', ''), 0)
    })

    it('should return 1 if strings are non-empty and same', () => {
        assert.equal(String.compare('hello', 'hello'), 1)
    })
    
    it('should be > 0.5 if strings are non-empty and second string is found in first', () => {
        assert.isTrue(String.compare('hello', 'he') > 0.5)
    })
})