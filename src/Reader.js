fs = require('fs');
path = require('path');

function Reader() {
  this.text = ""
};

Reader.prototype.read = function (filename) {
  var self = this;
  fs.readFile(filename, 'utf8', function(err, data){
    if (err) throw err;
    self.text = data;
  });
};

Reader.prototype._formatter = function (){
  this.text = this.text.toLowerCase().replace(/[^\w\s]/g,"")
}

// filepath of text can be found using the following method: `path.join(__dirname, '..', 'Railway-Children.txt')`

module.exports = Reader;
