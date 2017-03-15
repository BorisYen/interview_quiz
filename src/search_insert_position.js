'use strict'

/**
 * Given a sorted array and a target value, return the index if the target is found. 
 * If not, return the index where it would be if it were inserted in order. You may assume no duplicates in the array.
 * @param {*} arr 
 */
function searchInsertPosition(arr, target){
    let left = 0 ;
    let right = arr.length ;

    while(left < right){
        let mid = Math.floor((left+right)/2) ;
        if(arr[mid] === target){
            return mid ;
        } else if(arr[mid] < target){
            left = mid + 1 ;
        } else {
            right = mid - 1 ;
        }
    }

    return left ;
}

console.log(searchInsertPosition([1,3,5,6,7,8,9,10,20,30,40], 50)) ;
console.log(searchInsertPosition([1,3,5,6,7,8,9,10,20,30,40], 0)) ;
console.log(searchInsertPosition([1,3,5,6,7,8,9,10,20,30,40], 10)) ;
console.log(searchInsertPosition([1,3,5,6,7,8,9,10,20,30,40], 5)) ;