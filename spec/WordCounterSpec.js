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
    expect(wordCounter.fullTextAsArray).toEqual([])
    expect(wordCounter.wordArray).toEqual([])
  });

});
