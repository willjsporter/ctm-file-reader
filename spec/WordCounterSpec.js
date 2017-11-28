const fs = require('fs');
const path = require("path");
// const mock = require('mock-fs');

WordCounter = require('../src/WordCounter');

describe("WordCounter", function(){

  var wordCounter;

  beforeEach(function(){
    wordCounter = new WordCounter()
    });

  it("instantiates with blank arrays for the text and word count", function(){
    expect(wordCounter.wordArray).toEqual([])
  });

  it("can convert a string to converts a text file into an array of javaScript objects", function(){
    wordCounter.textToArray("mock text file text to test if converted to array")
    var expectedOutcome = ["mock", "text", "file", "text", "to", "test", "if", "converted", "to", "array"]
    expect(wordCounter.wordArray).toEqual(expectedOutcome)
  });

});
