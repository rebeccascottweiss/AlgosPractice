// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 >> [5,4,3,2,1]

const reverseSeq = n => {
    let result = []; 
    
    for(let i = n; i > 0; i--){
      result.push(i); 
    }
    return result; 
  };

  //simple for loop. Is there a way to refactor this into a one line code? 
  //refactored code from codewars solutions

  const reverseSeq = n => {
      //return statement is the solution... looks very cool.
    return Array(n).fill(0).map((e, i) => n - i );
    //     creates an array that is n elements long.
    // fill method fills the n-element array with the integer zero... in the test case it is now [0,0,0,0,0]
    // map method iterates through the array and runs the code for each element
    //     (e == element, i == index) so ... return 5 - 0, return 5 - 1, return 5 - 2... etc [5, 4, 3, 2, 1]
  };

//   Given a Divisor and a Bound , Find the largest integer N , Such That ,

// Conditions :
// N is divisible by divisor

// N is less than or equal to bound

// N is greater than 0.

// Notes
// The parameters (divisor, bound) passed to the function are only positive values .
// It's guaranteed that a divisor is Found .
// Input >> Output Examples
// maxMultiple (2,7) ==> return (6)
// Explanation:
// (6) is divisible by (2) , (6) is less than or equal to bound (7) , and (6) is > 0 .

// maxMultiple (10,50)  ==> return (50)
// Explanation:
// (50) is divisible by (10) , (50) is less than or equal to bound (50) , and (50) is > 0 .*

// maxMultiple (37,200) ==> return (185)
// Explanation:
// (185) is divisible by (37) , (185) is less than or equal to bound (200) , and (185) is > 0 .

function maxMultiple(divisor, bound){
    let res = bound; 
    // my solution: create a while loop that goes through each number backwards, starting at the bound. For the test case, that was 7
    while (res > 0){
        //in the first loop, res == 7, and 7 is greater than 0
        //but 7 % 2 (divisor) does not equal zero, so the if check is skipped. 

        //second loop, res == 6 and 6 is greater than 0
        //6%2 is also zero so... 
      if(res%divisor == 0){
        return res; //return 6 - the largest integer that is divisible by the divisor!
      }
      //first loop, res - 1 == 6 ^^^
      res--; 
    }
    
    return res; 
  }

  //can I refactor this to a one line answer? 

  const maxMultiple = (div, bound) => { return Array(bound).fill(bound).reduce((e, i)=>e-i%div == 0)}

  // this attempt failed. The reduce method takes each element and uses an accumulator to reduce it to one output. In the code above, the output was a boolean. The code will not break when the boolean is false, but goes through each thing. 

  //refactored code from codewars. This is a math problem, not a coding problem.

  const maxMultiple = (divisor,bound) => bound - bound % divisor ;

  //the anonymous function works fine, but you need to understand the math. In the example: bound is 7. 7%2 == 1. 7 - 1 = 6 ... giving us the highest integer that will divide by the divisor. 
  //so actually a logic problem. 