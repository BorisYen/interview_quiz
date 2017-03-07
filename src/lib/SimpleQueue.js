'use strict'

function Queue(){
    this._arr = [] ;
}

Queue.prototype.enqueue = function(it){
    this._arr.push(it) ;
}

Queue.prototype.dequeue = function(it){
    return this._arr.shift() ;
}

Queue.prototype.isEmpty = function(){
    return this._arr.length === 0 ;
}

Queue.prototype.size = function(){
    return this._arr.length ;
}

module.exports = Queue ;