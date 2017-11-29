const fs = require('fs');
const path = require('path');
const WordCounter = require('./WordCounter.js')

function Primer(words) {
  this.wordCountList = words;
};

Primer.prototype.primeWordCountIdentifier = function() {
  var primeCandidates = this.wordCountList.maxFinder()
  var primeList = primeCandidates.primeLister()
  this.wordCountList.forEach(function(wordObject) {
    if(primeList.includes(wordObject.count)) {
      wordObject.isPrime = true
    }
    else {
      wordObject.isPrime = false
    }
  })
};

Array.prototype.maxFinder = function() {
  var maxElement
  if (this.length > 0){
    maxElement = this[0].count
    this.forEach(function(element) {
      if(element.count > maxElement) {
        maxElement = element.count
      }
    })
  }
  return maxElement
};

Number.prototype.listToHighestN = function() {
  primeCandidates = new Array
  if(this >= 2){
    for(var i = 2; i <= this; i++){
      primeCandidates.push(i)
    }
  }
  return primeCandidates
}

Number.prototype.primeLister = function() {
  var MaxValue = this
  var primesToN = this.listToHighestN()
  if (MaxValue >= 2){
    for(var i = 0; i <= Math.sqrt(MaxValue); i++){
      for(var j = 0; j < primesToN.length; j ++){
        if(primesToN[j] > primesToN[i] && primesToN[j] % primesToN[i] == 0) {
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
