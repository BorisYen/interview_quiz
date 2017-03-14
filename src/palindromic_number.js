'use strict'

function palindromicNumber1(number=null){
    if(number/10 === 0) return true ; // single digit.

    let tmp = number;
    let tmpArr = [] ;
    while(tmp > 0){
        tmpArr.push(tmp%10) ;
        tmp = Math.floor(tmp/10) ;
    }

    for(let i=0, j=tmpArr.length-1; i<tmpArr.length || i === j || j>0; i++, j--){
        if(tmpArr[i] !== tmpArr[j]){
            return false ;
        }
    }

    return true ;
}

/**
 * this is better. 
 */
function palindromicNumber2(number=null){
    if(number){
        let n = number ;
        let rev = 0 ;

        while(n>0){
            let lastDigit = n%10 ;
            rev = rev*10+lastDigit ;
            n = Math.floor(n/10);
        }

        if(number == rev)
            return true ;
        else  
            return false ;
    }
}

console.log('solution one') ;
console.log(palindromicNumber1(123454321)) ;
console.log(palindromicNumber1(12)) ;
console.log(palindromicNumber1(12021)) ;
console.log('solution two') ;
console.log(palindromicNumber2(123454321)) ;
console.log(palindromicNumber2(12)) ;
console.log(palindromicNumber2(12021)) ;