// Question:​ Given an array of integers where each value 1 <= x <= len(array), write a function that finds all the duplicates in the array.


// dups([​1​, ​2​, ​3​])
// dups([​1​, ​2​, ​2​])
// dups([​3​, ​3​, ​3​])
// dups([​2​, ​1​, ​2​, ​1​]) = [​1​, ​2​]

function dups(arr){
    let dupDict = {};
    let returnArr = []; 
    //should we use a hashmap? Yes :) we in javascript 
    for (let i =0; i <= arr.length; i++){
        if(!dupDict.hasOwnProperty(arr[i])){
            dupDict[arr[i]] = 1;
        } else if (dupDict[arr[i]] == 1){
            dupDict[arr[i]] += 1;
            returnArr.push(arr[i]); 
        } else {
            dupDict[arr[i]] += 1;
        }
    }
    
    return returnArr
}

console.log(dups([1,2,2]));
console.log(dups([1,2,3]));
console.log(dups([3,3,3]));
console.log(dups([1,2,1,2]));
