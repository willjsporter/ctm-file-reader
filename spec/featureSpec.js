const fs = require('fs');
const path = require("path");

const Reader = require('../src/Reader.js');
const WordCounter = require('../src/WordCounter.js');
const Primer = require('../src/Primer.js').Primer;

describe("Feature test)", function() {

  var reader
  var wordCounter
  var primer
  var expectedOutput
  var testFilePath = path.join(__dirname, 'helpers/testFile.txt')

  beforeEach(function() {
    reader = new Reader()
    wordCounter = new WordCounter()
  });

  it("the text file is processed into objects for each word with its wordcount",
  function() {
    expectedOutput = [
      {word: "here", count: 7}, {word: "in", count: 2}, {word: "this", count: 1},
       {word: "file", count: 2}, {word: "is", count: 2}, {word: "a", count: 1},
       {word: "test", count: 13}, {word: "it", count: 2}, {word: "has", count: 1},
       {word: "some", count: 1}, {word: "good", count: 1}, {word: "stuff", count: 1},
      {word: "that", count: 1}, {word: "for", count: 1}, {word: "sure", count: 1}
    ]
    reader.formattedRead(testFilePath)
    wordCounter.wordCountText(reader.text)
    expect(wordCounter.wordArray).toEqual(expectedOutput)
  });

  it("each word's object shows if the number of occurrences is prime",
  function() {
    expectedOutput = [
      {word: "here", count: 7, isPrime: true}, {word: "in", count: 2, isPrime: true},
      {word: "this", count: 1, isPrime: false},
      {word: "file", count: 2, isPrime: true}, {word: "is", count: 2, isPrime: true},
      {word: "a", count: 1, isPrime: false}, {word: "test", count: 13, isPrime: true},
      {word: "it", count: 2, isPrime: true}, {word: "has", count: 1, isPrime: false},
      {word: "some", count: 1, isPrime: false}, {word: "good", count: 1, isPrime: false},
      {word: "stuff", count: 1, isPrime: false}, {word: "that", count: 1, isPrime: false},
      {word: "for", count: 1, isPrime: false}, {word: "sure", count: 1, isPrime: false}
    ]
    reader.formattedRead(testFilePath)
    wordCounter.wordCountText(reader.text)
    var words = wordCounter.wordArray
    primer = new Primer(words)
    primer.primeWordCountIdentifier()
    expect(primer.wordCountList).toEqual(expectedOutput)
  });

});
