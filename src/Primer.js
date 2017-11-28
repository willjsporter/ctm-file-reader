const fs = require('fs');
const path = require('path');

function Primer() {

};

Array.prototype.maxFinder = function () {
  var self = this
  var maxElement
  if (self.length > 0){
    maxElement = self[0]
    self.forEach(function(element) {
      if(element > maxElement) {
        maxElement = element
      }
    })
  }
  return maxElement
};


Number.prototype.listToMax = function () {
  var self = this
  primeCandidates = new Array
  if(self >= 2){
    for(var i = 2; i <= self; i++){
      primeCandidates.push(i)
    }
  }
  return primeCandidates
}

module.exports = {
  Primer: Primer,
  maxFinder: Array.prototype.maxFinder,
  listToMax: Number.prototype.listToMax
}
