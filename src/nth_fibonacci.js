'use strict'

function nthFibonacci1(n){
    if(n <= 1){
        return n ;
    } else {
        return nthFibonacci1(n-1) + nthFibonacci1(n-2) ;
    }
}

function nthFibonacci2(n){
    let cache = [] ;

    cache[0] = 0 ;
    cache[1] = 1 ;

    for(let i=2; i<=n; i++){
        cache[i] = cache[i-1] + cache[i-2] ;
    }

    return cache[n] ;
}

/**
 * 
 * best among these three methods. 
 */
function nthFibonacci3(n){
    let a = 0, b = 1, c ; // a -> [n-2], b -> [n-1]

    for(let i=2; i<=n; i++){
        c = a + b ;
        a = b ;
        b = c ;
    }

    return c ;
}

console.log(nthFibonacci1(6)+' '+nthFibonacci2(6)+' '+nthFibonacci3(6)) ;
console.log(nthFibonacci1(40)+' '+nthFibonacci2(40)+' '+nthFibonacci3(40)) ;