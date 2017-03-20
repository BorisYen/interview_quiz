'use strict'

const BST = require('./lib/BST') ;

function createWithPreOrderAndInOrder(preOrder=null, inOrder=null){
    if(!preOrder || !inOrder || preOrder.length !== inOrder.length) return null ;

    let inOrderMap = {} ;
    for(let i=0; i<inOrder.length; i++){
        inOrderMap[inOrder[i]] = i ;
    }

    let preIndex = 0 ; // will need to go over all the element in preOrder, need to keep the index.
    function createBST(preOrder, inOrder, inStart, inEnd){
        if(inStart > inEnd) return null ;

        let node = BST.insert(preOrder[preIndex]) ;

        preIndex++ ;
        if(inStart === inEnd) return node ;

        let nodeIndex = inOrderMap[node.value] ;
        node.left = createBST(preOrder, inOrder, inStart, nodeIndex-1) ;
        node.right = createBST(preOrder, inOrder, nodeIndex+1, inEnd) ;

        return node ;
    }

    return createBST(preOrder, inOrder, 0, inOrder.length-1) ;
}

function createWithPostOrderAndInOrder(postOrder=null, inOrder=null){
    if(!postOrder || !inOrder || postOrder.length !== inOrder.length) return null ;

    let inOrderMap = {} ;
    for(let i=0; i<inOrder.length; i++){
        inOrderMap[inOrder[i]] = i ;
    }

    let postIndex = postOrder.length-1 ; // will need to go over all the element in postOrder, need to keep the index.
    function createBST(postOrder, inOrder, inStart, inEnd){
        if(inStart > inEnd) return null ;

        let node = BST.insert(postOrder[postIndex]) ;

        postIndex-- ;
        if(inStart === inEnd) return node ;

        let nodeIndex = inOrderMap[node.value] ;
        node.right = createBST(postOrder, inOrder, nodeIndex+1, inEnd) ;
        node.left = createBST(postOrder, inOrder, inStart, nodeIndex-1) ;

        return node ;
    }

    return createBST(postOrder, inOrder, 0, inOrder.length-1) ;
}

console.log('inOrder resut of createWithPreOrderAndInOrder: ')
BST.printInOrder(createWithPreOrderAndInOrder(['A', 'B', 'D', 'E', 'C', 'F'], ['D', 'B', 'E', 'A', 'F', 'C'])) ;
console.log('inOrder resut of createWithPostOrderAndInOrder: ')
BST.printInOrder(createWithPostOrderAndInOrder(['D', 'E', 'B', 'F', 'C', 'A'], ['D', 'B', 'E', 'A', 'F', 'C'])) ;