'use strict'

function Node(value){
    this.value = value ;
    this.left = null ;
    this.right = null ;
}

function insert(value, root=null){
    if(!root){
        return new Node(value) ;
    } else {
        if(value < root.value)
            root.left = insert(value, root.left) ;
        else
            root.right = insert(value, root.right) ;

        return root ;
    }
}

function search(value, root){
    if(!root || root.value === value)
        return root ;

    if(value < root.value){
        return search(value, root.left) ;
    } else {
        return search(value, root.right) ;
    }
}

function printPreOrder(root=null){
    if(root){
        console.log(root.value) ;
        if(root.left) printPreOrder(root.left) ;
        if(root.right) printPreOrder(root.right) ;
    }
}

function printInOrder(root=null){
    if(root){
        if(root.left) printInOrder(root.left) ;
        console.log(root.value) ;
        if(root.right) printInOrder(root.right) ;
    }
}

function printPostOrder(root=null){
    if(root){
        if(root.left) printPostOrder(root.left) ;
        if(root.right) printPostOrder(root.right) ;
        console.log(root.value) ;
    }
}

module.exports = {
    insert,
    printInOrder,
    printPreOrder,
    printPostOrder
}
