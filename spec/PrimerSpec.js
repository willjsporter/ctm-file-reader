const fs = require('fs');
const path = require("path");
// const mock = require('mock-fs');

Primer = require('../src/Primer.js');

describe("Primer", function(){

  var primer;

  beforeEach(function(){
    primer = new Primer()
    });

  it("has a method that finds the maximum number in a range", function(){
    expect(primer.maxFinder([])).toEqual(undefined)
  });

  it("has a method that finds the maximum number in a range", function(){
    expect(primer.maxFinder([1,2,3,4,3])).toEqual(4)
});


});
