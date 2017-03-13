'use strict'

let utils = require('./lib/utils') ;
let createList = utils.createList ;
let printList = utils.printList ;
let Stack = require('./lib/SimpleStack') ;

function palindromicList(list){
    let stack = new Stack() ; // this is used to keep the first half of the list ;
    let slow = list ;
    let fast = list ;

    while(fast && fast.next){ // the key is make sure 'slow' point to the element in the middle of the list.
        stack.push(slow.value) ;
        slow = slow.next ;
        fast = fast.next.next ;
    }

    if(fast){ // the (length of the list)%2 = 1, and 'slow' is right in the middle of the list.
        slow = slow.next ;
    }

    while(slow){
        if(stack.pop() !== slow.value)
            return false ;
        else
            slow = slow.next ;
    }

    return true ;
}

console.log(palindromicList(createList([1, 2, 3, 4, 5]))) ;
console.log(palindromicList(createList([1, 2, 3, 2, 1]))) ;
console.log(palindromicList(createList([1, 2, 3, 3, 2, 1]))) ;
console.log(palindromicList(createList([1]))) ;
console.log(palindromicList(createList([1,2,1]))) ;
console.log(palindromicList(createList([1,2]))) ;