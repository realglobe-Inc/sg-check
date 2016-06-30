/**
 * Checking utilify for SUGOS
 * @module sg-check
 */

'use strict';

var d = function d(module) {
  return module.default || module;
};

module.exports = {
  get hasBin() {
    return d(require('./has_bin'));
  },
  get hasVar() {
    return d(require('./has_var'));
  }
};