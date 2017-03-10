'use strict'

let utils = require('./lib/utils') ;
let insertList = utils.insertList ;
let printList = utils.printList ;

/**
 * 
 * @param {*} l target list 
 * @param {*} n nth element to the last
 */
function findNthToTheLast(l, n){
    let head = l ;
    let ref = l ;
    let count = 0 ;

    while(ref && count < n){
        ref = ref.next ;
        count++ ;
    }

    if(count != n){ // the length of l is less than n
        return null ;
    }

    while(ref){
        ref = ref.next ;
        head = head.next ;
    }

    return head.value ;
}

let list = insertList(null, 1) ;
insertList(list, 2) ;
insertList(list, 3) ;
insertList(list, 4) ;
insertList(list, 5) ;
insertList(list, 6) ;

console.log(findNthToTheLast(list, 2)) ;
console.log(findNthToTheLast(list, 4)) ;
console.log(findNthToTheLast(list, 8)) ;
