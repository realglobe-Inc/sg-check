/**
 * Test case for hasBin.
 * Runs with mocha.
 */
'use strict'

const hasBin = require('../lib/has_bin.js')
const assert = require('assert')
const co = require('co')

describe('has-bin', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Has bin', () => co(function * () {
    {
      let has = yield hasBin('node')
      assert.strictEqual(has, true)
    }
    {
      let has = yield hasBin('hogehoge')
      assert.strictEqual(has, false)
    }

    {
      let caught
      try {
        let has = yield hasBin.allOf([ 'hogehoge' ])
      } catch (err) {
        caught = err
      }
      assert.ok(!!caught)
    }
  }))
})

/* global describe, before, after, it */
