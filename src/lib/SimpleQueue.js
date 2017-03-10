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

Queue.prototype.peek = function(){
    let firstE = this._arr.shift() ;

    this._arr.unshift(firstE) ;

    return firstE ;
}

module.exports = Queue ;