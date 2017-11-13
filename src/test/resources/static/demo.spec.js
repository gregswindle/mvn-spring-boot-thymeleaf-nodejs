'use strict'

const demo = require('../../../../src/main/resources/static/demo')

describe('demo', () => {
  it('adds numbers', () => {
    expect(demo.add([1, 1, 1, 1, 1])).toBe(5)
  })
})
