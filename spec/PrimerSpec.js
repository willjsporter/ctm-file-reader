const fs = require('fs');
const path = require("path");
// const mock = require('mock-fs');

const Primer = require('../src/Primer.js').Primer;
const maxFinder = require('../src/Primer.js').maxFinder
const listToMax = require('../src/Primer.js').listToMax

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

  it("#listToMax creates an array of integers from 2 up to a given number", function(){
    var expectedOutput = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
    var testNumber = new Number(17)
    expect(testNumber.listToMax()).toEqual(expectedOutput)
  });


});
