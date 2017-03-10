'use strict'

let Stack = require('./lib/SimpleStack') ;
let printStack = require('./lib/utils').printStack ;

function sortStack(s){ 
    sort(s) ;

    function sort(s){
        if(s.isEmpty()) return s ;

        let top = s.pop() ;
        
        sort(s) ;
        compareAndInsert(top, s) ;
    }

    function compareAndInsert(e, st){
        if(st.isEmpty() || e < st.peek()){
            st.push(e) ;
        } else {
            let top = st.pop() ;
            
            compareAndInsert(e, st) ;
            st.push(top) ;
        }
    }

    return s ;
}

let s = new Stack() ;

s.push(4) ;
s.push(3) ;
s.push(2) ;
s.push(7) ;
s.push(6) ;
s.push(5) ;
s.push(5) ;

printStack(sortStack(s)) ;

