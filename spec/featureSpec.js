const fs = require('fs');
const path = require("path");
// const mock = require('mock-fs');

// const WordCountController = require('../src/Controller.js');
const Reader = require('../src/Reader.js');
const WordCounter = require('../src/WordCounter.js');
const Primer = require('../src/Primer.js').Primer;
// const maxFinder = require('../src/Primer.js').maxFinder
// const listToHighestN = require('../src/Primer.js').listToHighestN
// const primeLister = require('../src/Primer.js').primeLister

describe("Feature test)", function(){


  var reader
  var wordCounter
  var Primer
  var expectedOutput

  beforeEach(function(){
    reader = new Reader()
    wordCounter = new WordCounter()
    });

  it("takes the text file and processes it into objects for each word and its wordcount", function(){
    expectedOutput = [
      {word: "here", count: 7}, {word: "in", count: 2}, {word: "this", count: 1}, {word: "file", count: 2},
      {word: "is", count: 2}, {word: "a", count: 1}, {word: "test", count: 13}, {word: "it", count: 2},
      {word: "has", count: 1}, {word: "some", count: 1}, {word: "good", count: 1}, {word: "stuff", count: 1},
      {word: "that", count: 1}, {word: "for", count: 1}, {word: "sure", count: 1},
    ]
    reader.formattedRead('/Users/will/Projects/JobApplications/CompareTheMarket/techtest/testFile.txt')
    // var textFileString = reader.
    wordCounter.wordCountText(reader.text)

    expect(wordCounter.wordArray).toEqual(expectedOutput)
  });

});
