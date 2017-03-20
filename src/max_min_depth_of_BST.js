'use strict'

const utils = require('./lib/utils') ;

function findMaxDepth(bst, level=1){
    if(!bst.left && !bst.right) return level ;

    let leftDepth = 0 ;
    let rightDepth = 0 ;

    if(bst.left)
        leftDepth = findMaxDepth(bst.left, level+1) ;

    if(bst.right)
        rightDepth = findMaxDepth(bst.right, level+1) ;

    return Math.max(leftDepth, rightDepth) ;
}

function findMinDepth(bst, level=1){
    if(!bst.left && !bst.right) return level ;

    let leftDepth = Number.MAX_SAFE_INTEGER ;
    let rightDepth = Number.MAX_SAFE_INTEGER ;

    if(bst.left)
        leftDepth = findMinDepth(bst.left, level+1) ;

    if(bst.right)
        rightDepth = findMinDepth(bst.right, level+1) ;

    return Math.min(leftDepth, rightDepth) ;
}

console.log(findMaxDepth(utils.createBST([5, 4, 3, 2, 8, 7, 6, 1]))) ;
console.log(findMaxDepth(utils.createBST([5]))) ;

console.log(findMinDepth(utils.createBST([5, 4, 3, 2, 8, 7, 6, 1]))) ;
console.log(findMinDepth(utils.createBST([5]))) ;