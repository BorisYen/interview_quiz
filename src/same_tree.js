'use strict'

const utils = require('./lib/utils') ;

function checkSameTree(root1, root2){
    if(!root1 && !root2) return true ;

    if((!root1 || !root2) || (root1.value !== root2.value))
        return false ;
    else
        return checkSameTree(root1.left, root2.left) && checkSameTree(root1.right, root2.right) ;
}

let root1 = utils.createBST([5, 4, 6, 7, 8, 9]) ;
let root2 = utils.createBST([5, 4, 6, 7, 8, 9]) ;
console.log(checkSameTree(root1, root2)) ;
root2 = utils.createBST([5, 4, 6, 7, 8, 9, 10]) ;
console.log(checkSameTree(root1, root2)) ;