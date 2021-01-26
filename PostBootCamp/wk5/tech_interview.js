// Space complexity - new data created in the function
// both expressed in big O notation 

//constant time O(1)

function reverseOrder(arr){
    // create a variable for the result - an empty array
    let res = []; //space complexity: N - amount of memory 
    // loop through the original array, and push the values into the result array
    for(let i = arr.length-1; i >= 0; i--){
        res.push(arr[i]); 
    }

    return res; 
}

console.log(reverseOrder([1, 2, 3, 4, 5]))