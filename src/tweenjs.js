/**********************************************************************************
 * (c) 2018
 * Licensed under the MIT license
 * Any questions please feel free to email me or put a issue up on the github repo
 * Version 1.0.0                                                 tralves@gmail.com
 *********************************************************************************/
'use strict'

const TWEEN = require('@tweenjs/tween.js')

// Workaround to make tweenjs work in an env that is
// not really web and it is not really node...
TWEEN.now = function() {
  return new Date().getTime()
}

//////////////////////////
// requestAnimationFrame polyill
let lastTime = 0

const requestAnimationFrame = function(callback, element) {
  var currTime = new Date().getTime()
  var timeToCall = Math.max(0, 16 - (currTime - lastTime))
  var id = setTimeout(function() {
    callback(currTime + timeToCall)
  }, timeToCall)
  lastTime = currTime + timeToCall
  return id
}
//////////////////////////

const cancelAnimationFrame = function(id) {
  clearTimeout(id)
}

// ticking tween.js
const tick = () => {
  requestAnimationFrame(tick)
  TWEEN.update()
}
requestAnimationFrame(tick)

global.TWEEN = TWEEN
