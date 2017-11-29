const fs = require('fs');
const path = require('path');
const Reader = require('./Reader.js')

function WordCounter() {
  this.wordArray = new Array()
};

WordCounter.prototype.wordCountText = function (inputArray) {
  self = this
  while (inputArray.length !== 0){
    var entry = inputArray._countAndRemoveWord(inputArray)
    this.wordArray.push(entry)
  }
}

Array.prototype._countAndRemoveWord = function (array) {
  var counter = 0
  var arrayIndex = 0
  var currentWord = array[0]
  while (arrayIndex < array.length) {
    if (currentWord === array[arrayIndex]) {
      counter++
      array.splice(arrayIndex,1)
      }
    else{arrayIndex++}
  }
  return {word: currentWord, count: counter};
}

module.exports = WordCounter;
