'use strict'

function Stack(){
    this._arr = [] ;
}

Stack.prototype.push = function(it){
    this._arr.push(it) ;
}

Stack.prototype.pop = function(){
    if(this._arr.length > 0){
        return this._arr.pop() ;
    }
}

Stack.prototype.isEmpty = function(){
    return this._arr.length === 0 ;
}

Stack.prototype.size = function(){
    return this._arr.length ;
}

module.exports = Stack ;