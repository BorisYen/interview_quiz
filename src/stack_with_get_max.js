'use strict'

let Stack = require('./lib/SimpleStack') ;

function StackWithMax(){
    this._items = new Stack() ;
    this._maxStack = new Stack() ; // this is used to keep track of the max item.
}

StackWithMax.prototype.pop = function(){
    let topE = this._items.pop() ;

    if(this.getMax() === topE)
        this._maxStack.pop() ;

    return topE ;
}

StackWithMax.prototype.push = function(it){
    this._items.push(it) ;

    if(!this.getMax() || it >= this.getMax()){
        this._maxStack.push(it) ;
    }
}

StackWithMax.prototype.getMax = function(){
    return this._maxStack.peek() ;
}

let s = new StackWithMax() ;

s.push(2) ;
s.push(7) ;
s.push(7) ;
s.push(1) ;
s.push(8) ;
s.push(3) ;
s.push(9) ;
s.push(5) ;

console.log('cur max is: '+s.getMax()+' pop: '+s.pop()) ;
console.log('cur max is: '+s.getMax()+' pop: '+s.pop()) ;
console.log('cur max is: '+s.getMax()+' pop: '+s.pop()) ;
console.log('cur max is: '+s.getMax()+' pop: '+s.pop()) ;
console.log('cur max is: '+s.getMax()+' pop: '+s.pop()) ;
console.log('cur max is: '+s.getMax()+' pop: '+s.pop()) ;
console.log('cur max is: '+s.getMax()+' pop: '+s.pop()) ;
console.log('cur max is: '+s.getMax()+' pop: '+s.pop()) ;

