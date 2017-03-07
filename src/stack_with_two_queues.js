'use strict'

/**
 * Crate a stack with two queues.
 */

let Queue = require('./lib/SimpleQueue') ;

let commonFunctions = {
    isEmpty: function(){
        return this._pushQueue.isEmpty() && this._popQueue.isEmpty() ;
    },
    size: function(){
        return this._pushQueue.size() + this._popQueue.size() ;
    },
    _switchQ: function(){
        let tmp = this._pushQueue ;
        this._pushQueue = this._popQueue ;
        this._popQueue = tmp ;
    }
}

/**
 * favor push()
 */
function Stack1(){
    this._pushQueue = new Queue() ;
    this._popQueue = new Queue() ;
}

Stack1.prototype.pop = function(){
    if(this._pushQueue.size() > 1){
        while(this._pushQueue.size() > 1){
            this._popQueue.enqueue(this._pushQueue.dequeue()) ;
        }
    }

    this._switchQ() ;

    return this._popQueue.dequeue() ;
}

Stack1.prototype.push = function(it){
    this._pushQueue.enqueue(it) ;
}

Object.assign(Stack1.prototype, commonFunctions) ;

/**
 * favor pop()
 */
function Stack2(){
    this._pushQueue = new Queue() ;
    this._popQueue = new Queue() ;
}

Stack2.prototype.pop = function(){
    return this._popQueue.dequeue() ;
}

Stack2.prototype.push = function(it){
    this._pushQueue.enqueue(it) ;

    while(!this._popQueue.isEmpty()){
        this._pushQueue.enqueue(this._popQueue.dequeue()) ;
    }

    this._switchQ() ;
}

Object.assign(Stack2.prototype, commonFunctions) ;

/************************************************** */
let stack = new Stack1() ;
console.log('test stack1') ;
stack.push(1) ;
stack.push(3) ;
stack.push(8) ;
stack.push(5) ;

while(!stack.isEmpty()){
    console.log(stack.pop()) ;
}

stack = new Stack2() ;
console.log('test stack2') ;
stack.push(11) ;
stack.push(33) ;
stack.push(88) ;
stack.push(55) ;

while(!stack.isEmpty()){
    console.log(stack.pop()) ;
}
