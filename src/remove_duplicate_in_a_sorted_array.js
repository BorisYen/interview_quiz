'use strict'

/**
 * Given a sorted array, remove the duplicates in place such that > each element appear only once and return the new length.
 * Do not allocate extra space for another array, you must do this in place with constant memory.
 * For example, Given input array A = [1,1,2],
 * The function should return length = 2, and A is now [1,2].
 */
function removeDuplicate1(arr){
    let i=0 ;

    for(let j=1; j<arr.length; j++){
        if(arr[j] === arr[i]) continue ;
        
        arr[++i] = arr[j] ;
    }

    return i+1 ;
}

let arr = [1,1,2] ;

console.log(removeDuplicate1(arr)) ;
console.log(arr) ;

/**
 * Follow up for "Remove Duplicates": What if duplicates are allowed at most twice?
 * For example, Given sorted array A = [1,1,1,2,2,3],
 * The function should return length = 5, and A is now [1,1,2,2,3].
 */
function removeDuplicate2(arr){
    let i=0 ;
    let occur=1 ;

    for(let j=1; j<arr.length; j++){
        if(arr[j] === arr[i]){
            if(occur < 2){
                arr[++i] = arr[j] ;
                occur++ ;
            }
        } else {
            arr[++i] = arr[j] ;
            occur = 1 ;
        }
    }

    return i+1 ;
}

arr = [1,1,1,2,2,3] ;
console.log(removeDuplicate2(arr)) ;
console.log(arr) ;