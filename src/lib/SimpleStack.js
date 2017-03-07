'use strict'

function Stack(){
    let arr = [] ;

    this.push = function(it){
        arr.push(it) ;
    }

    this.pop = function(){
        if(arr.length > 0){
            return arr.pop() ;
        }
    }

    this.isEmpty = function(){
        return arr.length === 0 ;
    }

    this.size = function(){
        return arr.length ;
    }
}

module.exports = Stack ;