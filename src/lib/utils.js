'use strict'

function ListNode(value){
    this.value = value ;
    this.next = null ;
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

module.exports = {
    printStack(s){
        while(!s.isEmpty()){
            console.log(s.pop()) ;
        }
    },
    printQueue(q){
        while(!q.isEmpty()){
            console.log(q.dequeue()) ;
        }
    },
    printJson(o){
        console.log(JSON.stringify(o)) ;
    },
    printList(l){
        while(l){
            console.log(l.value) ;
            l = l.next ;
        }
    },
    createList(elements){
        let list = null ;
        for(let i=0; i<elements.length; i++){
            list = insertList(list, elements[i]) ;
        }

        return list ;
    }
}