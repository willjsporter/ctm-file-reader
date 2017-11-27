const fs = require('fs');
const path = require("path");
const mock = require('mock-fs');

Reader = require('../src/Reader');

describe("Reader", function(){

  var reader;
  var mockText;

  beforeEach(function(done){
    mockText = 'This is the mock text to be stored in the Reader instance in order to pass the test.'
    mock({
      'mock/file/path': mockText
    });
    reader = new Reader();
    reader.read('mock/file/path');
    done();
    });

  afterEach(mock.restore);

  it("reads the file and returns a string", function(){
    expect(reader.text).toEqual(mockText);
  });

});
