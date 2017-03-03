'use strict'

function maxProductMethod1(arr){
    if(arr.length < 3) throw(new Error("There are less than 3 items in the array.!!"))
    arr.sort(function(a, b){
        if(a < b) return -1 ;
        else if(a > b) return 1 ;
        else return 0 ;
    }) ;

    return Math.max(arr[0]*arr[1]*arr[arr.length-1], arr[arr.length-1]*arr[arr.length-2]*arr[arr.length-3]) ;
}


function maxProductMethod2(arr){
    if(arr.length < 3) throw(new Error("There are less than 3 items in the array.!!"))

    let maxA = Number.MIN_SAFE_INTEGER, 
        maxB = Number.MIN_SAFE_INTEGER, 
        maxC = Number.MIN_SAFE_INTEGER,
        minA = Number.MAX_SAFE_INTEGER,
        minB = Number.MAX_SAFE_INTEGER ;

    for(let i=0; i<arr.length; i++){
        if(arr[i] > maxA){
            maxC = maxB
            maxB = maxA ;
            maxA = arr[i] ;
        } else if(arr[i] > maxB){
            maxC = maxB ;
            maxB = arr[i] ;
        } else if(arr[i] > maxC){
            maxC = arr[i] ;
        }

        if(arr[i] < minA){
            minB = minA ;
            minA = arr[i] ;
        } else if(arr[i] < minB){
            minB = arr[i] ;
        }
    }

    return Math.max(maxA*maxB*maxC, minA*minB*maxA) ;
}

console.log(maxProductMethod1([1, -4, 8, 3, 10])) ;
console.log(maxProductMethod2([1, -4, 8, 3, 10])) ;
console.log(maxProductMethod1([1])) ;