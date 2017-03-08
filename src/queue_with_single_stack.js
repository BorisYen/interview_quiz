'use strict'

/**
 * It appears to be using one stack.
 * However, if "call stack" is taking into account. Then, the solution still uses two stacks.
 * 
 */

let Stack = require('./lib/SimpleStack') ;

function Queue(){
    this._stack = new Stack() ;
}

Queue.prototype.dequeue = function(){
    return this._stack.pop() ;
}

Queue.prototype.enqueue = function(it){
    if(!this._stack.isEmpty()){
        let topE = this._stack.pop() ;
        this.enqueue(it) ;
        this._stack.push(topE) ;
    } else {
        this._stack.push(it) ;
    }
}

Queue.prototype.size = function(){
    return this._stack.size() ;
}

Queue.prototype.isEmpty = function(){
    return this._stack.isEmpty() ;
}

let queue = new Queue() ;
queue.enqueue(1) ;
queue.enqueue(2) ;
queue.enqueue(3) ;
queue.enqueue(4) ;
queue.enqueue(5) ;
queue.enqueue(6) ;

while(!queue.isEmpty()){
    console.log(queue.dequeue()) ;
}