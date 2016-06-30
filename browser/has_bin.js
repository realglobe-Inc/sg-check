/**
 * Check if a bin available
 * @function hasBin
 * @param {string} binName - Name of bin
 * @returns {Promise.<boolean>} - Result
 */
'use strict';

var hasbin = require('hasbin');
var co = require('co');

/** @lends hasBin */
function hasBin(binName) {
  return co(regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return new Promise(function (resolve) {
              return hasbin(binName, resolve);
            });

          case 2:
            return _context.abrupt('return', _context.sent);

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
}

module.exports = hasBin;