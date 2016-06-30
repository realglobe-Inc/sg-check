/**
 * Check if a variable available
 * @function hasVar
 * @param {string} varName - Name of variable
 * @returns {Promise.<boolean>} - Result
 */
'use strict';

var co = require('co');

/** @lends hasVar */
function hasVar(varName) {
  // Prevent injection
  varName = encodeURIComponent(varName).replace(/[\(\)\.;\s\t]/g, '');
  return co(regeneratorRuntime.mark(function _callee() {
    var typeofVar;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            typeofVar = null;

            eval('typeofVar = typeof ' + varName);
            return _context.abrupt('return', typeofVar !== 'undefined');

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
}

module.exports = hasVar;