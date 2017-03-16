'use strict'

/**
 * We have an array of integers, where:
 * 1. The integers are in the range 1..n
 * 2. The array has a length of n+1
 * 
 * if there is only one duplicate, write a fuction to find it.
 */

// the sum of 1 to n is n(n+1)/2
function findTheOnlyDuplicate1(arr){
    let n = arr.length-1 ;
    let sumToN = n*(n+1)/2 ;
    let sumArr = 0 ;

    for(let i=0; i<arr.length; i++){
        sumArr += arr[i] ;
    }

    return sumArr - sumToN ;
}

// use the XOR operator, A ^ A = 0, 0 ^ A = A
function findTheOnlyDuplicate2(arr){
    let ret = arr[0] ;

    for(let i=1; i<arr.length; i++){
        ret ^= i;
        ret ^= arr[i];
    }

    return ret ;
}


/**
 * the precondition is the same. 
 * if there are multiple duplcates, write a function to find them.
 * 
 * @param {*} arr 
 */
function findAllDuplicates(arr){
    let ret = [] ;

    for(let i=0; i<arr.length; i++){
        let tmp = Math.abs(arr[i]) ;

        if(arr[tmp] > 0){
            arr[tmp] = -1*arr[tmp] ;
        } else {
            ret.push(tmp) ;
        }
    }

    return ret ;
}

console.log(findTheOnlyDuplicate1([1,2,3,3,4])) ;
console.log(findTheOnlyDuplicate2([1,2,3,3,4,5])) ;
console.log(findAllDuplicates([1,2,3,4,5,6,6,8,9,10,10])) ;