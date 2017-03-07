'use strict'

/**
 * Print all premutations of a string.
 */

function preMutation(str, prefix=''){ 
    if(str.length === 1){
        console.log(prefix+str) ;
    } else {
        let charArr = str.split('') ;
        for(let i=0; i<charArr.length; i++){
            let clone = charArr.slice() ; 
            let cur = clone.splice(i, 1) ;
            preMutation(clone.join(''), prefix+cur[0]) ;
        }
    }
}

preMutation('abc') ;