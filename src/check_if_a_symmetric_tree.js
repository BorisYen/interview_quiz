'use strict'

const BST = require('./lib/BST') ;

/**
 * Given a binary tree, check whether it is a mirror of itself(ie, symmetric around its center)
 */

// recursive
function checkSymmetric1(bst){
    if(!bst) return false ;

    return helper(bst.left, bst.right) ;

    function helper(left, right){
        if(!left && !right) return true ;
        else if(!left || !right) return false ;

        if(left.value === right.value){
            return helper(left.right, right.left) && helper(left.left, right.right) ;
        } else {
            return false ;
        }
    }
}

// loop
function checkSymmetric2(bst){
    if(!bst || (bst.left && !bst.right) || (bst.right && !bst.left)) 
        return false ;
    else if(!bst.left && !bst.right) 
        return true ;

    let children = [] ;

    children.push(bst.left) ;
    children.push(bst.right) ;

    while(children.length > 0){
        let tmp = [] ;

        for(let i=0, j=children.length-1; i<children.length/2; i++, j--){
            if(children[i].value !== children[j].value) return false ;

            if(children[i].left && children[j].right){
                tmp.unshift(children[i].left) ;
                tmp.push(children[j].right) ;
            }

            if(children[i].right && children[j].left){
                tmp.unshift(children[i].right) ;
                tmp.push(children[j].left) ;
            }

            if(children[i].left && !children[j].right) return false ;
            if(children[i].right && !children[j].left) return false ;
        }

        children = tmp ;
    }

    return true 
}

let root = new BST.Node(1) ;
let lev11 = new BST.Node(2) ;
let lev12 = new BST.Node(2) ;
let lev21 = new BST.Node(3) ;
let lev22 = new BST.Node(4) ;
let lev23 = new BST.Node(4) ;
let lev24 = new BST.Node(3) ;

root.left = lev11 ;
root.right = lev12 ;
lev11.left = lev21 ;
lev11.right = lev22 ;
lev12.left = lev23 ;
lev12.right = lev24 ;

console.log(checkSymmetric1(root)) ;
console.log(checkSymmetric2(root)) ;
lev12.left = null ;
console.log(checkSymmetric1(root)) ;
console.log(checkSymmetric2(root)) ;
