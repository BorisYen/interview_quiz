'use strict'

function palindromicNumber(number=null){
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

console.log(palindromicNumber(123454321)) ;
console.log(palindromicNumber(12)) ;
console.log(palindromicNumber(12021)) ;