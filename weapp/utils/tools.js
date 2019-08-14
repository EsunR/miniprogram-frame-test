"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shuffle = shuffle;

function shuffle(input) {
  var length = input.length;
  var index; // 执行length-1次即可，i=0时替换的是自身，这么做没有意义

  for (var i = length - 1; i; i--) {
    // 选取0到i-1中的一个位置
    index = Math.floor(Math.random() * i); // 与i位置的值互换

    input[i] = input.splice(index, 1, input[i])[0];
  }

  return input;
}