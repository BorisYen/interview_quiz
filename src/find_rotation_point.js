'use strict'

/**
 * Suppose a sorted array is rotated at some pivot unknown to you beforehand.
 * (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
 * find the index of the rotation point. for the above example, the index is 3
 * 
 * assume no duplicate exists in the array. 
 */
function findRotationPoint(arr=null){
    if(!arr) return null ;

    let left = 0 ;
    let right = arr.length - 1 ;
    let mid = 0 ;

    while(left < right){
        mid = Math.floor(left + (right - left)/2) ;
        
        if(arr[mid] > arr[mid+1]){ // the rotation point should be the only one that is larger than it's next element.
            return mid ;
        } else if(arr[mid] > arr[left]){
            left = mid ;
        } else {
            right = mid ;
        }
    }

    return null ;
}

console.log(findRotationPoint([5, 6, 7, 8, 1, 2, 3])) ;
console.log(findRotationPoint([5, 1, 2, 3, 4])) ;
console.log(findRotationPoint([1, 2, 3, 4])) ;
console.log(findRotationPoint([2, 3, 4, 5, 6, 7, 8, 9, 1])) ;
