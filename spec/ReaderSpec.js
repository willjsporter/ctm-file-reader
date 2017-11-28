const fs = require('fs');
const path = require("path");
const mock = require('mock-fs');

Reader = require('../src/Reader');

describe("Reader", function(){

  var reader;
  var mockText;
  var mockReadText;

  beforeEach(function(){
    mockText = 'This is the mock text to be read, in the Reader instance; this is in order to give test input data.'
    mockReadText = 'this is the mock text to be read in the reader instance this is in order to give test input data'
    mock({
      'mock/file/path': mockText
    });
    reader = new Reader()
    reader._read('mock/file/path');
    });

  afterEach(mock.restore);

  it("#read", function(){
    expect(reader.text).toEqual(mockText);
  });

  it("reads the file and returns a string", function(){
    // reader._read('mock/file/path');
    reader._formatter();
    expect(reader.text).toEqual(mockReadText);
  });

  it("reads the file and returns a string", function(){
    reader.formattedRead('mock/file/path')
    expect(reader.text).toEqual(mockReadText)
  });

});
