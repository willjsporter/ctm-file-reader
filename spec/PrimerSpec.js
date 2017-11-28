const fs = require('fs');
const path = require("path");
// const mock = require('mock-fs');

const Primer = require('../src/Primer.js').Primer;
const maxFinder = require('../src/Primer.js').maxFinder
const listToHighestN = require('../src/Primer.js').listToHighestN
const primeLister = require('../src/Primer.js').primeLister

describe("Primer", function(){

  var primer;
  var mockWordCounter;

  beforeEach(function(){
    mockWordCounter = [
      {word: "mock", count: 17}, {word: "text", count: 11},
      {word: "file", count: 12}, {word: "test", count: 1}
    ]
    primer = new Primer(mockWordCounter)
    });

  it("#primeWordCountIdentifier adds whether a number in an object is prime to each word", function(){
    var expectedOutput = [
      {word: "mock", count: 17, isPrime: true}, {word: "text", count: 11, isPrime: true},
      {word: "file", count: 12, isPrime: false}, {word: "test", count: 1, isPrime: false}
    ]
    primer.primeWordCountIdentifier()
    expect(primer.wordCountList).toEqual(expectedOutput)
  });


});

describe("Primer Helper methods", function(){

  it("#maxFinder returns nothing for the trivial case", function(){
    expect([].maxFinder()).toEqual(undefined)
  });

  it("#maxFinder finds the maximum count of a list of elements", function(){
    var testArray = [
      {someOtherThing: "not selected", count: 1}, {count: 2},
      {count: 3}, {count: 4}, {count: 3}
    ]
    expect(testArray.maxFinder()).toEqual(4)
  });

  it("#listToHighestN creates an array of integers from 2 up to a given number", function(){
    var expectedOutput = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
    var testNumber = new Number(17)
    expect(testNumber.listToHighestN()).toEqual(expectedOutput)
  });

  it("#primeLister returns a list of primes up to given value", function(){
    var testNumber = new Number(17)
    var expectedOutput = [2, 3, 5, 7, 11, 13, 17]
    expect(testNumber.primeLister()).toEqual(expectedOutput)
  });


});
