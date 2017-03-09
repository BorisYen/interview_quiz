'use strict'

function ListNode(value){
    this.value = value ;
    this.next = null ;
}

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

function printList(list=null){
    while(list != null){
        console.log(list.value) ;
        list = list.next ;
    }
}

function insertList(list=null, value){
    if(value){
        if(!list){
            return new ListNode(value) ;
        } else {
            let curNode = list ;

            while(curNode !== null){
                if(!curNode.next) {
                    curNode.next = new ListNode(value) ;
                    break ;
                }
                curNode = curNode.next ;
            }

            return list ;
        }
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


