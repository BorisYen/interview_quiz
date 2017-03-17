'use stict'

const utils = require('./lib/utils') ;

function mergeSortedList(listA, listB){
    let dummy = utils.createList([0]) ;
    let pa = listA ;
    let pb = listB ;
    let p = dummy ;

    while(pa && pb){
        if(pb.value < pa.value){
            p.next = pb ;
            pb = pb.next ;
        } else {
            p.next = pa ;
            pa = pa.next ;
        }

        p = p.next ;
    }

    if(pa){
        p.next = pa ;
    } else {
        p.next = pb ;
    }

    return dummy.next ;
}

let listA = utils.createList([1,2,5,7,9]) ;
let listB = utils.createList([2,6,9,10]) ;
utils.printList(mergeSortedList(listA, listB)) ;