'use strict'

/**
 * Create a stack with a queue.
 */

let Queue = require('./lib/SimpleQueue') ;
let printStack = require('./lib/utils').printStack ;

function Stack(){
    this._queue = new Queue() ;
}

Stack.prototype.pop = function(){
    return this._queue.dequeue() ;
}

Stack.prototype.push = function(it){
    this._queue.enqueue(it) ;

    let insertCount = this._queue.size() ;
    while(insertCount > 1){
        this._queue.enqueue(this._queue.dequeue()) ;
        insertCount-- ;
    }
}

Stack.prototype.isEmpty = function(){
    return this._queue.isEmpty() ;
}

Stack.prototype.size = function(){
    return this._queue.size() ;
}

let stack = new Stack() ;
console.log('test stack') ;
stack.push(1) ;
stack.push(3) ;
stack.push(8) ;
stack.push(5) ;

printStack(stack) ;