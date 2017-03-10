'use strict'

let utils = require('./lib/utils') ;
let insertList = utils.insertList ;
let printList = utils.printList ;

function reverseList(list=null){
    let preNode = null ;
    let curNode = list ;
    let nextNode = null ;

    while(curNode !== null){
        nextNode = curNode.next ;
        curNode.next = preNode ;
        preNode = curNode ;
        curNode = nextNode ;
    }

    return preNode ;
}

function reverseListRecursively(list=null, pre=null){
    if(!list){
        return null ;
    } else if(list.next === null){
        list.next = pre ;

        return list ;
    } else {
        let head = reverseListRecursively(list.next, list) ;

        list.next = pre ;

        return head ;
    }
}

let list = insertList(null, 1) ;
insertList(list, 2) ;
insertList(list, 3) ;
insertList(list, 4) ;
insertList(list, 5) ;
insertList(list, 6) ;
console.log('list:')
printList(list) ;
let tmp = reverseListRecursively(list) ;
console.log('after reverseListRecursively') ;
printList(tmp) ;
console.log('then, after reverseList') ;
printList(reverseList(tmp)) ;


