'use strict'

const { hasBin, hasVar } = require('sg-check')
const co = require('co')

co(function * () {
  // Check a command available
  {
    let hasWhichCommand = yield hasBin('which')
    /* ... */
  }

  // Check a variable available
  {
    let hasWindow = yield hasVar('window')
    /* ... */
  }
}).catch((err) => console.error(err))
