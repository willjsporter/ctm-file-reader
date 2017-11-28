const fs = require('fs');
const path = require('path');
const Reader = require('./Reader.js')

function WordCounter() {
  this.wordArray = new Array()
};

WordCounter.prototype.textToArray = function (inputString) {
  this.wordArray = inputString.split(" ")
}


// filepath of text can be found using the following method: `path.join(__dirname, '..', 'Railway-Children.txt')`

module.exports = WordCounter;
