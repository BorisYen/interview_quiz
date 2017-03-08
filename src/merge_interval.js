'use strict'

function mergeInterval(intervals){
    intervals.sort(function(a, b){
        if(a.start < b.start)
            return -1;
        else if(a.start > b.start)
            return 1;
        else 
            return 0;
    });

    let results = [] ;

    results.push(Object.assign({}, intervals[0])) ; //avoid changing the original array.
    for(let i=1; i<intervals.length; i++){
        let top = results.pop() ;

        if(top.end < intervals[i].start){ //no overlapping
            results.push(top) ;
            results.push(Object.assign({}, intervals[i])) ;
        } else if(top.end < intervals[i].end){ //overlapping
            top.end = intervals[i].end ;
            results.push(top) ;
        } else { // intervals[i] is within top
            results.push(top) ;
        }
    }

    return results;
}

console.log('case 1') ;
console.log(mergeInterval([{
    start: 0,
    end: 1
}, {
    start: 3,
    end: 5
}, {
    start: 4,
    end: 8
}, {
    start: 10,
    end: 12
}, {
    start: 9,
    end: 10
}])) ;
console.log('case 2') ;
console.log(mergeInterval([{
    start: 1,
    end: 10
}, {
    start: 2,
    end: 6
}, {
    start: 3,
    end: 5
}, {
    start: 7,
    end: 9
}])) ;