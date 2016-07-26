/**
 * Check if a bin available
 * @function hasBin
 * @param {string} binName - Name of bin
 * @returns {Promise.<boolean>} - Result
 */
'use strict'

const hasbin = require('hasbin')
const co = require('co')
const path = require('path')
const { existsAsync, statAsync } = require('asfs')

/** @lends hasBin */
function hasBin (binName) {
  return co(function * () {
    // Check existing file
    {
      let filename = path.resolve(binName)
      let exists = yield existsAsync(filename)
      if (exists) {
        let state = yield statAsync(filename)
        if (!state.isDirectory()) {
          return true
        }
      }
    }
    // Check by hasbin module.
    return yield new Promise((resolve) => hasbin(binName, resolve))
  })
}

Object.assign(hasBin, {
  allOf (...args) {
    console.warn('[sg-check] hasBin.allOf is now deprecated. Use habBin.assertAll instead.')
    return hasBin.assertAll(...args)
  },
  /**
   * Check to has all bin. Reject any of missing
   * @param {string[]} binNames - Bin names to check
   * @returns {Promise}
   */
  assertAll (binNames) {
    return co(function * () {
      for (let binName of binNames) {
        let has = yield hasBin(binName)
        if (!has) {
          throw new Error(`[sg-check] Command not found: ${binName}`)
        }
      }
      return true
    })
  }
})

module.exports = hasBin
