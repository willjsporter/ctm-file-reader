const fs = require('fs');
const path = require('path');

function Primer() {

};

Primer.prototype.maxFinder = function (numberArray) {
  var maxElement
  if (numberArray.length > 0){
    maxElement = numberArray[0]
    numberArray.forEach(function(element) {
      if(element > maxElement) {
        maxElement = element
      }
    })
  }
  return maxElement
};

module.exports = Primer;
