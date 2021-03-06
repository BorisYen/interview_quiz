'use strict'

/**
 * Create a FIFO queue with two stacks.
 */

let Stack = require('./lib/SimpleStack') ;
let printQueue = require('./lib/utils').printQueue ;

function Queue(){
    let inStack = new Stack() ;
    let outStack = new Stack() ;

    this.enqueue = function(it){
        inStack.push(it) ;
    }

    this.dequeue = function(){
        if(outStack.isEmpty()){
            while(!inStack.isEmpty()){
                outStack.push(inStack.pop()) ;
            }
        } 
        
        return outStack.pop() ;
    }

    this.isEmpty = function(){
        return inStack.isEmpty() && outStack.isEmpty() ;
    }

    this.size = function(){
        return inStack.size() + outStack.size() ;
    }
}

let que = new Queue() ;

que.enqueue('a') ;
que.enqueue('b') ;
que.enqueue('c') ;
que.enqueue('d') ;
que.enqueue('e') ;

console.log('Before dequeue queue size is: '+que.size()) ;

printQueue(que) ;

console.log('After dequeue queue size is: '+que.size()) ;