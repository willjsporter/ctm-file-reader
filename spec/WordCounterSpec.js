const fs = require('fs');
const path = require("path");
// const mock = require('mock-fs');

WordCounter = require('../src/WordCounter');

describe("WordCounter", function() {

  var wordCounter;

  beforeEach(function() {
    wordCounter = new WordCounter()
  });

  it("instantiates with blank arrays for the text and word count", function() {
    expect(wordCounter.wordArray).toEqual([])
  });

  it("converts an array file into an array of javaScript objects",
  function() {
    wordCounter.wordCountText(["mock", "text", "file", "test"])
    var expectedOutcome = [
      {word:"mock", count: 1}, {word:"text", count: 1},
      {word:"file", count: 1}, {word:"test", count: 1}
    ]
    expect(wordCounter.wordArray).toEqual(expectedOutcome)
  });

  it("removes remaining instances of word from text to avoid repetitions",
  function() {
    wordCounter.wordCountText(["test", "mock", "text", "file", "test"])
    var expectedOutcome = [
      {word:"test", count: 2}, {word:"mock", count: 1},
      {word:"text", count: 1}, {word:"file", count: 1}
    ]
    expect(wordCounter.wordArray).toEqual(expectedOutcome)
  });

});
