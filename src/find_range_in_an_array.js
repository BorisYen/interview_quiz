'use strict'

/**
 * Given a sorted array of integers, find the starting and ending position of a given target value.
 * For example,
 * Given [5, 7, 7, 8, 8, 10] and target value 8, the return value should be [3, 4]
 * 
 * If target is not in the array, return [-1, -1]
 */

// the key is when arr[mid] === target, which way should we go, left side of the array? or right side of the array?
function findRange(arr, target){
    let ret = [] ;
    let left = 0 ;
    let right = arr.length - 1;

    // find the left most target
    while(left <= right){
        let mid = Math.floor(left + (right - left)/2) ;

        if(arr[mid] >= target){
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    if(left < (arr.length-1) && arr[left] === target)
        ret.push(left) ;
    else
        return [-1, -1] ;

    right = arr.length - 1 ;

    // find the right most target.
    while(left <= right){
        let mid = Math.floor(left + (right - left)/2) ;

        if(arr[mid] <= target){
            left = mid + 1;
        } else {
            right = mid - 1 ;
        }
    }

    ret.push(right) ;

    return ret ;
}

console.log(findRange([5, 7, 8, 8, 9, 10], 1)) ;
console.log(findRange([5, 7, 8, 8, 9, 10], 11)) ;
console.log(findRange([5, 7, 8, 8, 9, 10], 8)) ;
console.log(findRange([5, 7, 8, 8, 9, 10], 7)) ;