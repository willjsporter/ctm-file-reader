const fs = require('fs');
const path = require('path');
const Reader = require('./Reader.js')

function WordCounter() {
  this.wordArray = new Array()
};

WordCounter.prototype.textToArray = function (inputString) {
  self = this
  var textAsArray = inputString.split(" ")
  textAsArray.forEach(function(arrayWord){
    var count = 0
    for (var i = 0; i < textAsArray.length; i++){
      if(textAsArray[i] === arrayWord) {
        count++
      }
    }
    var entry = {word: arrayWord, count: count}
    self.wordArray.push(entry)
  })
}


// filepath of text can be found using the following method: `path.join(__dirname, '..', 'Railway-Children.txt')`

module.exports = WordCounter;
