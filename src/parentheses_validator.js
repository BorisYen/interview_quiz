'use strict'

let Stack = require('./lib/SimpleStack') ;

/**
 * check if the str contain balanced parentheses
 *  
 */
function parenthesesValidator(str=''){
    let stack = new Stack() ;

    function isMatch(a, b){
        if((a === '(' && b === ')') || (a === '[' && b === ']') || (a === '{' && b === '}'))
            return true ;
        else
            return false ;
    }

    for(let i=0; i<str.length; i++){
        let curChar = str.charAt(i) ;

        if(curChar === '(' || curChar === '[' || curChar === '{'){
            stack.push(curChar) ;
        } else if(curChar === ')' || curChar === ']' || curChar === '}'){
            let stackTop = stack.pop() ;

            if(!isMatch(stackTop, curChar)) return false ;
        }
    }

    return stack.isEmpty() ; // if the stack is not empty, it is not balanced.
}

console.log(parenthesesValidator('(this is a book[and I do not like it{}])')) ;
console.log(parenthesesValidator('(this is a book[and I do not like it{])')) ;
console.log(parenthesesValidator('((([[[]]]))')) ;
console.log(parenthesesValidator('()[]{}')) ;