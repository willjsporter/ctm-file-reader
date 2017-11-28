fs = require('fs');
path = require('path');

function Reader() {
  this.text = ""
};

Reader.prototype._read = function (filepath) {
  this.text = fs.readFileSync(filepath, 'utf8')
};

Reader.prototype._formatter = function (){
  this.text = this.text.toLowerCase().replace(/[^\w\s]/g,"")
}

Reader.prototype.formattedRead = function(filepath) {
  this._read(filepath)
  this._formatter()
}

// filepath of text can be found using the following method: `path.join(__dirname, '..', 'Railway-Children.txt')`

module.exports = Reader;
