// In this kata, you will write a function that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.

// For example, the array arr = [0, 1, 2, 5, 1, 0] has a peak at position 3 with a value of 5 (since arr[3] equals 5).

// The output will be returned as an object with two properties: pos and peaks. Both of these properties should be arrays. If there is no peak in the given array, 
//then the output should be {pos: [], peaks: []}.

// Example: pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]) should return {pos: [3, 7], peaks: [6, 3]} (or equivalent in other languages)

// All input arrays will be valid integer arrays (although it could still be empty), so you won't need to validate the input.

// The first and last elements of the array will not be considered as peaks (in the context of a mathematical function, we don't know what is after and before and therefore, 
//we don't know if it is a peak or not).

// Also, beware of plateaus !!! [1, 2, 2, 2, 1] has a peak while [1, 2, 2, 2, 3] and [1, 2, 2, 2, 2] do not. In case of a plateau-peak, 
//please only return the position and value of the beginning of the plateau. For example: pickPeaks([1, 2, 2, 2, 1]) returns {pos: [1], peaks: [2]} (or equivalent in other languages)

// Have fun!

function pickPeaks(arr){
    const res = {pos: [], peaks:[]}; 
    //loop through the array, checking the previous and next index for each index
    let pos, peak; //refactor. No need for "peak" variable when you have the index... just push arr[pos]
    //start with [1] and end at arr.length - 2 so that the first and last indecies are left out of the check
    //example [2, 1, 3, 1, 2, 2, 2, 2, 1] results {pos:[2,4], peak:[3,2]}
    for (let i = 1; i < arr.length; i++){
      //check that the prev index is less than the index you are on...
      //add pos = -1 or in other words an undefined position that will never occur in the array
      if(arr[i-1] < arr[i]){
        //if it is, set the temp variable "peak" and "pos" to keep track of the position
        peak = arr[i]; //delete this
        pos = i; 
      } else if (i-1 != 0 && arr[i-1] > arr[i]){  
        //if the position before arr[i] is greater than arr[i], then that was a peak
          if(!res.pos.includes(pos) && pos != undefined){
            res.pos.push(pos); 
            res.peaks.push(peak); 
          }
        //the problem is with a downward slope... so I need to be able to check for that? 
        
      }
    }
    
    return res; 
    //  return {pos:[],peaks:[]}
  }


  console.log(pickPeaks([1,2,3,6,4,1,2,3,2,1])) // returns {pos:[3,7], peaks:[6,3]}
  console.log(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,3])) //returns {pos:[3,7], peaks:[6,3]}
  console.log(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,2,2,1]))//returns {pos:[3, 7, 10], peaks:[6,3,2]}