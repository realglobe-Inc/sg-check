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
  varName = encodeURIComponent(varName) // Prevent injection
  return co(function * () {
    let typeofVar = null
    eval(`typeofVar = typeof ${varName}`)
    return typeofVar !== 'undefined'
  })
}

module.exports = hasVar
