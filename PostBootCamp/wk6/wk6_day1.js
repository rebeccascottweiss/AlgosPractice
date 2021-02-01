// 5. Consecutive Array
// Question:​ Given an unsorted array, find the length of the longest sequence of consecutive numbers in the array.

// consecutive([​4​, ​2​, ​1​, ​6​, ​5​]) = ​3​, [​4​, ​5​, ​6​] 
// consecutive([​5​, ​5​, ​3​, ​1​]) = ​1​, [​1​], [​3​], or [​5​]


function consectiveArray(arr){
    // sort the array
    arr.sort((a, b) => a - b); 
    let count = 1, max = 0; 

    //checking two elements of the array, so you need to EITHER start at one or stop at arr.length - 1
    for(let i = 1; i < arr.length; i++){
        //for each element - check if the element and the next one are consecutive
        if (arr[i] - arr[i-1] == 1){
            // is consecutive
            count += 1;
        } else {
            // not consecutive
            count = 1; 
        }
        
        if(count > max){
            max = count;
        }
    }

    return max;
}

console.log(consectiveArray([4, 2, 1, 6, 5]));  //should return 3
console.log(consectiveArray([5, 5, 3, 1])); //should return 1
console.log(consectiveArray([9, 8, 7, 6, 5, 4, 3, 2, 1])) // should return 9
console.log(consectiveArray([1, 3, 5, 7, 9, 11])); //should return 1