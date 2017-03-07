'use strict'

function Queue(){
    let arr = [] ;

    this.enqueue = function(it){
        arr.push(it) ;
    }

    this.dequeue = function(){
        return arr.shift() ;
    }

    this.isEmpty = function(){
        return arr.length === 0 ;
    }

    this.size = function(){
        return arr.length ;
    }
}

module.exports = Queue ;