'use strict'

/**
 * remove all instance of 'target' and return the new length of the arr.
 * 
 * @param {*} arr 
 * @param {*} target 
 */
function removeElement(arr, target){
    let i=0 ;
    let j=0 ;

    while(j<arr.length){
        if(arr[j] === target){
            j++ ;
            continue ;
        }
        
        arr[i++] = arr[j] ;
        j++ ;
    }

    return i ;
}

let arr = [1,2,2,2,4,5] ;
console.log(removeElement(arr, 2)) ;
console.log(arr) ;