// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

function timeInMilliseconds(h, m, s){
    m = m + (h*60); 
    s = s + (m*60); 
    var milli = s * 1000; 
    
    return milli; 

}

// refactored solution from codewars... use of anonymous function
const past = (h,m,s) => 1000 * (3600 * h + 60 * m + s);

//

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Example:

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes:

// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers){
    const values = numbers.split(" ").map(num => parseInt(num)); 
    let highest = values[0]; 
    let lowest =  values[0]; 
      
    for (let num of values){
      if (num > highest){
        highest = num; 
      } 
      
      if (num < lowest){
        lowest = num; 
      }
      
    }
    
    return highest + " " + lowest; 
  }

  // refactored solution from codewars... fString and use of Math.max/Math.min. You can use Math built in functions on strings? Also, use of ...spread.

  function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
  }