//Is n divisible by x and y?

// Create a function that checks if a number n is divisible by 
//two numbers x AND y. All inputs are positive, non-zero digits.

// Examples:
// 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
// 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
// 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5



function isDivisible(n, x, y){
    var isDivis = false; 
    
    if(n%x == 0 && n%y==0){
        isDivis = true; 
    }
    
    return isDivis
}

//refactored code
const divisibleBy = (n, x, y) => {return n%x == 0 && n%y == 0 ? true : false}

console.log(divisibleBy(3, 1, 3));    //expected true
console.log(divisibleBy(12, 2, 6));  // expected true
console.log(divisibleBy(100, 5, 3)); // expected false
console.log(divisibleBy(12, 7, 5));  // expected false


//code example from codewars solution
const isDivisible = (n, x, y) => n%x==0 && n%y==0;

//this is a single line arrow function like my original function, but you don't
//need the return statement or ternary. An arrow function assumes a return, and 
// the && || operators are binary operators... ie they will return 
// true or false
