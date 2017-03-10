'use strict'

let utils = require('./lib/utils') ;
let insertList = utils.insertList ;
let printList = utils.printList ;

function deleteNode(node){
    if(node && node.next){
        let tmp = node.next ;
        node.value = tmp.value ;
        node.next = tmp.next ;
    } else {
        if(node)
            node.value = null ; // this is just a indicator meaning that this node is dummy (null)
    }
}

let list = insertList(null, 1) ;
insertList(list, 2) ;
insertList(list, 3) ;
insertList(list, 4) ;
insertList(list, 5) ;
insertList(list, 6) ;

deleteNode(list) ;

printList(list) ;