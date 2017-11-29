const fs = require('fs');
const path = require('path');
var prompt = require('prompt');

const Reader = require('./src/Reader.js')
const WordCounter = require('./src/WordCounter.js');
const Primer = require('./src/Primer.js').Primer;

var fileToRead

console.log("please input filename")
prompt.start();
prompt.get('filename', function (err, result) {
  fileToRead = result.filename
  var wordCountController = function(filepathFromProjectRoot) {
    var filepath = path.join(__dirname, filepathFromProjectRoot)
    var reader = new Reader()
    reader.formattedRead(filepath)
    var wordCounter = new WordCounter
    wordCounter.wordCountText(reader.text)
    primer = new Primer(wordCounter.wordArray)
    primer.primeWordCountIdentifier()
    primer.wordCountList.forEach(function(word){
      if (word.isPrime) {
        console.log(
          `There are ${word.count} instances of ${word.word} which is prime`
        )
      }
      else if (word.isPrime === false) {
        console.log(
          `There are ${word.count} instances of ${word.word} which is not prime`
        )
      }
    })
  };

  wordCountController(fileToRead)
});
