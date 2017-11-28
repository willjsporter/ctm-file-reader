const fs = require('fs');
const path = require("path");
// const mock = require('mock-fs');

const Primer = require('../src/Primer.js').Primer;
const maxFinder = require('../src/Primer.js').maxFinder
const listToHighestN = require('../src/Primer.js').listToHighestN
const primeLister = require('../src/Primer.js').primeLister

describe("Primer", function(){

  var primer;

  beforeEach(function(){
    primer = new Primer()
    });

  it("has a method returns nothing for the trivial case", function(){
    expect([].maxFinder()).toEqual(undefined)
  });

  it("has a method that finds the maximum count of a list of elements", function(){
    expect([1,2,3,4,3].maxFinder()).toEqual(4)
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
