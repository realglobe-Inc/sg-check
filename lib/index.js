/**
 * Checking utilify for SUGOS
 * @module sg-check
 */

'use strict'

let d = (module) => module && module.default || module

module.exports = {
  get hasBin () { return d(require('./has_bin')) },
  get hasVar () { return d(require('./has_var')) }
}
