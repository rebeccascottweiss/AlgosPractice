// ALGO 1

// A string is considered balanced when every letter in the string appears both in uppercase and lowercase
// For example, CATattac is balanced (a, c, t occur in both cases). 
// Madam is not (a, d only appear in lowercase).
// Write a function that given a string returns the shortest balanced substring of that string.

// Examples:
// “azABaabza” returns “ABaab” 
// “TacoCat” returns -1 (not balanced)
// “AcZCbaBz” returns the entire string // is there an 'isUpperCase' method?

// a.toUpperCase()
// A
function isBalanced(string){
    var idx = 0; 
    let balance = true; 
    while(idx < string.length){
        if(string.indexOf(string[idx].toUpperCase()) == -1 || string.indexOf(string[idx].toLowerCase()) == -1){
            balance = false; 
        }
        idx++;
    }

    return balance; //this helper function will not help. 
}
function balancedString(string){
    //store index? 
    //iterate through the string
    //checking each char for Upper/LowerCase... hashmap?
    //sliding window method????? Take the whole string and slide a sub window, increment the window
    //start with 2 char, then 3, then 4
    //find the substring with both Upper/Lower case of each char ... shortest substring
    //return the shortest substring

    // control the window size. Start with size of 2 and increment to length of original array.
    // a loop to move the sliding window along the original string
    let windowSize = 2;
    while(windowSize < string.length) {
        // some code helper function? to check that the substring is balanced?
        let subStart = 0;
        let subEnd = subStart + windowSize;
        for (let i = 0; i+windowSize < string.length; i++){
            if (isBalanced(string.substring(subStart, subEnd+1))){
                console.log(subStart, subEnd);
                return string.substring(subStart, subEnd+1);
            }
            subStart++;
            subEnd++;
        }
        

        windowSize++;
    }
    return -1;
}

console.log(balancedString("azABaabza"))
// azA
// 9 12
// ABaab
console.log(balancedString("TacoCat"))
//coC
// 7 10
// -1
console.log(balancedString("AcZCbaBz"))
//cZC
// 8 11
// AcZCbaBz
