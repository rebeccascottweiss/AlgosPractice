// 8. Merge K Arrays
// Question: Given k sorted arrays, merge them into a single sorted array.
// eg.
// merge({{1, 4, 7},{2, 5, 8},{3, 6, 9}}) = {1, 2, 3, 4, 5, 6, 7, 8, 9}

function mergeK(arr){
    // pull all values from sub-arrays and place into a new array
    // sort the new array lowest to highest
    let res = [];

    for(let i=0; i<arr.length; i++){
        res = [ ...res, ...arr[i]] // spread
        res = res.concat(arr[i])
        // for(let j = 0; j < arr[i].length; j++){
        //     res.push(arr[i][j]); 
        // }
    }
    console.log("New Array= ", res);
    return res.sort((a, b) => a - b); // (a, b) => a - b // look above where you see sortNumber on that page, they define sortNumber
    // can someone explain why it is minus???
    // console.log("Sorted= ", res);
    //  https://www.w3schools.com/jsref/jsref_sort.asp 
    // sort uses .String() by default so we have to override that, otherwise it will sort by that first char in the string
/*
    The callback function or, technically, comparison function receives two arguments (called a and b by convention) 
    and should return 1 if the first argument should preceed the second, -1 if the second argument should preceed the first and 0 if they are equal.
*/
}

// Let M be the number of arrays and N be the elements in each array
// Time Complexity: (M x N) x log(M x N) =>  

// Space Complexity: M x N 

test1 = [[1, 4, 7],[2, 5, 8],[3, 6, 9]];
test2 = [[1,6,9], [2, 4, 8, 11], [3, 5, 7]];

console.log(mergeK(test1)); 
console.log(mergeK(test2)); 

