'use strict'

function checkPalindrome(str=''){
    let cache = {} ;

    for(let i=0; i<str.length; i++){
        let char = str.charAt(i) ;

        if(cache[char]){
            delete cache[char] ;
        } else {
            cache[char] = 1 ;
        }
    }

    let cacheSize = Object.keys(cache).length ;

    return cacheSize === 0 || cacheSize === 1 ;
}

console.log(checkPalindrome("civic")) ;
console.log(checkPalindrome("ivicc")) ;
console.log(checkPalindrome("civil")) ;
console.log(checkPalindrome("livci")) ;
console.log(checkPalindrome("yakak")) ;
console.log(checkPalindrome("aabbcc")) ;
