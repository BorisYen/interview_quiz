'use strict'

/**
 * Given two sorted array A, B, merge B into A.
 * Assume A has enough space for both A and B.
 */
function mergeSortedArray(arrA, arrB){ // store the items backward, so that there is no need to shift elements after insertion.
    let i = arrA.length-1 ;  
    let j = arrB.length-1 ;
    let k = arrA.length+arrB.length-1 ;

    while(i >= 0 && j >= 0){
        if(arrA[i] < arrB[j]){
            arrA[k] = arrB[j] ;
            j-- ;
        } else {
            arrA[k] = arrA[i] ;
            i-- ;
        }
        k-- ;
    }

    while(i >= 0){
        arrA[k] = arrA[i] ;
        k-- ; 
        i-- ;
    }

    while(j >= 0){
        arrA[k] = arrB[j] ;
        k-- ;
        j-- ;
    }

    if(k !== -1)
        console.log('Something wrong'+k) ;

    return arrA ;
}

console.log(mergeSortedArray([1,3,5,7,9], [2,4,6,8,10])) ;
console.log(mergeSortedArray([1,3,5], [2,4,6,7,8,9,10])) ;