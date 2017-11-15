'use strict'

const demo = {
  add: function (numbers) {
    return numbers.reduce((sum, value) => {
      return sum + value
    }, 0)
  }
}

module.exports = demo
