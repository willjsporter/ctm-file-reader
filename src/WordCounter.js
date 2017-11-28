const fs = require('fs');
const path = require('path');
const Reader = require('./Reader.js')

function WordCounter() {
  this.wordArray = new Array()
};

WordCounter.prototype.textToArray = function (inputString) {
  self = this
  var textAsArray = inputString.split(" ")
  while (textAsArray.length !== 0){
    var count = 0
    var arrayIndex = 0
    var currentWord = textAsArray[0]
    while(arrayIndex < textAsArray.length){
      if(currentWord === textAsArray[arrayIndex]) {
        count++
        textAsArray.splice(arrayIndex,1)
        }
      else{arrayIndex++}
    }
    var entry = {word: currentWord, count: count}
    self.wordArray.push(entry)
  }
}


// filepath of text can be found using the following method: `path.join(__dirname, '..', 'Railway-Children.txt')`

module.exports = WordCounter;
