/**
 * Check if a variable available
 * @function hasVar
 * @parma {string} varName - Name of variable
 * @returns {Promise.<boolean>} - Result
 */
'use strict'

const co = require('co')

/** @lends hasVar */
function hasVar (varName) {
  // Prevent injection
  varName = encodeURIComponent(varName)
    .replace(/[\(\)\.;\s\t]/g, '')
  return co(function * () {
    let typeofVar = null
    eval(`typeofVar = typeof ${varName}`)
    return typeofVar !== 'undefined'
  })
}

module.exports = hasVar
