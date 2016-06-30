/**
 * Check if a bin available
 * @function hasBin
 * @param {string} binName - Name of bin
 * @returns {Promise.<boolean>} - Result
 */
'use strict';

var hasbin = require('hasbin');
var co = require('co');
var path = require('path');

var _require = require('apemanfs');

var existsAsync = _require.existsAsync;
var statAsync = _require.statAsync;

/** @lends hasBin */

function hasBin(binName) {
  return co(regeneratorRuntime.mark(function _callee() {
    var filename, exists, state;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            filename = path.resolve(binName);
            _context.next = 3;
            return existsAsync(filename);

          case 3:
            exists = _context.sent;

            if (!exists) {
              _context.next = 10;
              break;
            }

            _context.next = 7;
            return statAsync(filename);

          case 7:
            state = _context.sent;

            if (state.isDirectory()) {
              _context.next = 10;
              break;
            }

            return _context.abrupt('return', true);

          case 10:
            _context.next = 12;
            return new Promise(function (resolve) {
              return hasbin(binName, resolve);
            });

          case 12:
            return _context.abrupt('return', _context.sent);

          case 13:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
}

module.exports = hasBin;