'use strict'

module.exports = {
    printStack(s){
        while(!s.isEmpty()){
            console.log(s.pop()) ;
        }
    },
    printQueue(q){
        while(!q.isEmpty()){
            console.log(q.dequeue()) ;
        }
    },
    printJson(o){
        console.log(JSON.stringify(o)) ;
    }
}