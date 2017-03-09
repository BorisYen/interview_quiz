'use strict'

/**
 * Print all premutations of a string.
 */

function perMutation(str, prefix=''){ 
    if(str.length === 1){
        console.log(prefix+str) ;
    } else {
        for(let i=0; i<str.length; i++){
            let rest = str.slice(0, i) + str.slice(i+1) ;
            perMutation(rest, prefix + str.charAt(i)) ;
        }
    }
}

perMutation('abc') ;
