const fs = require('fs');
const path = require('path');

function Reader() {
  this.text = ""
};

Reader.prototype._read = function(filepath) {
  this.text = fs.readFileSync(filepath, 'utf8')
};

Reader.prototype._formatter = function() {
  this.text = this.text.toLowerCase().replace(/[^\w\s]/g,"").split(/\s/g)
  for(var i = 0; i < this.text.length; i++){
    if(this.text[i] === ""){
      this.text.splice(i,1)
    }
  }
}

Reader.prototype.formattedRead = function(filepath) {
  this._read(filepath)
  this._formatter()
}

module.exports = Reader;
