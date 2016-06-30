/**
 * Check if a bin available
 * @function hasBin
 * @param {string} binName - Name of bin
 * @returns {Promise.<boolean>} - Result
 */
'use strict'

const hasbin = require('hasbin')
const co = require('co')

/** @lends hasBin */
function hasBin (binName) {
  return co(function * () {
    return yield new Promise((resolve) => hasbin(binName, resolve))
  })
}

module.exports = hasBin
