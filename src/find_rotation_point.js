'use strict'

function findRotationPoint(arr=null){
    if(!arr) return null ;

    let left = 0 ;
    let right = arr.length - 1 ;
    let mid = 0 ;

    while(left < right){
        mid = Math.floor((left + right)/2) ;
        
        if(arr[mid] > arr[mid+1]){
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
