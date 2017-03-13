'use strict'

let utils = require('./lib/utils') ;
let createList = utils.createList ;
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

let list = createList([1, 2, 3, 4, 5, 6]) ;

console.log(findNthToTheLast(list, 2)) ;
console.log(findNthToTheLast(list, 4)) ;
console.log(findNthToTheLast(list, 8)) ;
