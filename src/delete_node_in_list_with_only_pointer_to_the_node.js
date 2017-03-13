'use strict'

let utils = require('./lib/utils') ;
let createList = utils.createList ;
let printList = utils.printList ;

function deleteNode(node){
    if(node && node.next){
        let tmp = node.next ;
        node.value = tmp.value ;
        node.next = tmp.next ;
    } else {
        if(node)
            node.value = null ; // create an indicator saying this is the end of the list.
    }
}

let list = createList([1, 2, 3, 4, 5, 6]) ;

deleteNode(list) ;

printList(list) ;