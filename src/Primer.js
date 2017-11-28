const fs = require('fs');
const path = require('path');

function Primer() {

};

Array.prototype.maxFinder = function () {
  var self = this
  var maxElement
  if (self.length > 0){
    maxElement = self[0].count
    self.forEach(function(element) {
      if(element.count > maxElement) {
        maxElement = element.count
      }
    })
  }
  return maxElement
};

Number.prototype.listToHighestN = function () {
  var self = this
  primeCandidates = new Array
  if(self >= 2){
    for(var i = 2; i <= self; i++){
      primeCandidates.push(i)
    }
  }
  return primeCandidates
}

Number.prototype.primeLister = function () {
  var MaxValue = this
  var primesToN = this.listToHighestN()
  if (MaxValue >= 2){
    for(var i = 0; i <= Math.sqrt(MaxValue); i++){
      for(var j = 0; j < primesToN.length; j ++){
        if(primesToN[j] > primesToN[i] && primesToN[j] % primesToN[i] == 0){
          primesToN.splice(j,1)
        }
      }
    }
  }
  return primesToN
}

module.exports = {
  Primer: Primer,
  maxFinder: Array.prototype.maxFinder,
  primeLister: Number.prototype.primeLister,
  listToHighestN: Number.prototype.listToHighestN
}
