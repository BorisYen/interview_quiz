'use strict'

var Queue = require('./lib/SimpleQueu')

/**
 * favor push()
 */
function Stack1(){
    let pushQueue = new Queue() ;
    let popQueue = new Queue() ;

    function switchQ(){
        let tmp = pushQueue ;
        pushQueue = popQueue ;
        popQueue = tmp ;
    }

    this.pop = function(){
        if(pushQueue.size() > 1){
            while(pushQueue.size() > 1){
                popQueue.enqueue(pushQueue.dequeue()) ;
            }
        }

        switchQ() ;

        return popQueue.dequeue() ;
    }

    this.push = function(it){
        pushQueue.enqueue(it) ;
    }

    this.isEmpty = function(){
        return pushQueue.isEmpty() && popQueue.isEmpty() ;
    }

    this.size = function(){
        return pushQueue.size() + popQueue.size() ;
    }
}

/**
 * favor pop()
 */
function Stack2(){
    let pushQueue = new Queue() ;
    let popQueue = new Queue() ;

    function switchQ(){
        let tmp = pushQueue ;
        pushQueue = popQueue ;
        popQueue = tmp ;
    }

    this.pop = function(){
        return popQueue.dequeue() ;
    }

    this.push = function(it){
        pushQueue.enqueue(it) ;

        while(!popQueue.isEmpty()){
            pushQueue.enqueue(popQueue.dequeue()) ;
        }

        switchQ() ;
    }

    this.isEmpty = function(){
        return pushQueue.isEmpty() && popQueue.isEmpty() ;
    }

    this.size = function(){
        return pushQueue.size() + popQueue.size() ;
    }
}

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
