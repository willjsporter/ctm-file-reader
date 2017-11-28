fs = require('fs');
path = require('path');

function WordCounter() {
  this.fullTextAsArray = new Array()
  this.wordArray = new Array()
};
// filepath of text can be found using the following method: `path.join(__dirname, '..', 'Railway-Children.txt')`

module.exports = WordCounter;
