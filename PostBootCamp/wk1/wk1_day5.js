// A natural number is called k-prime if it has exactly k prime factors, counted with multiplicity. For example:

// k = 2  -->  4, 6, 9, 10, 14, 15, 21, 22, ...
// k = 3  -->  8, 12, 18, 20, 27, 28, 30, ...
// k = 5  -->  32, 48, 72, 80, 108, 112, ...
// A natural number is thus prime if and only if it is 1-prime.

// Task:
// Complete the function count_Kprimes (or countKprimes, count-K-primes, kPrimes) which is given parameters k, start, end (or nd) and returns an array (or a list or a string depending on the language - see "Solution" and "Sample Tests") of the k-primes between start (inclusive) and end (inclusive).

// Example:
// countKprimes(5, 500, 600) --> [500, 520, 552, 567, 588, 592, 594]
// Notes:

// The first function would have been better named: findKprimes or kPrimes :-)
// In C some helper functions are given (see declarations in 'Solution').
// For Go: nil slice is expected when there are no k-primes between start and end.

//solution from codewars. Spent almost 40 minutes but couldn't get any closer to a solution... Note the use of a helper function. I needed that. 
function primeFactors(n) {
    var factors = [], i = 2;
    while (i * i <= n) {
        while (n % i === 0) {
            factors.push(i);
            n /= i;
        }
        i++;
    }
    if (n > 1) factors.push(n);
    return factors.length;
}
function countKprimes(k, start, nd) {
    var kprimes = [], i = start;
    while (i <= nd) {
        if (primeFactors(i) === k)
            kprimes.push(i);
        i++;
    }
    return kprimes;
}


// A natural number is called k-prime if it has exactly k prime factors, counted with multiplicity. A natural number is thus prime if and only if it is 1-prime.

// Examples:
// k = 2 -> 4, 6, 9, 10, 14, 15, 21, 22, …
// k = 3 -> 8, 12, 18, 20, 27, 28, 30, …
// k = 5 -> 32, 48, 72, 80, 108, 112, …
// Task:

// Given an integer k and a list arr of positive integers the function consec_kprimes (or its variants in other languages) returns how many times in the sequence arr numbers come up twice in a row with exactly k prime factors?

// Examples:

// arr = [10005, 10030, 10026, 10008, 10016, 10028, 10004]
// consec_kprimes(4, arr) => 3 because 10005 and 10030 are consecutive 4-primes, 10030 and 10026 too as well as 10028 and 10004 but 10008 and 10016 are 6-primes.

// consec_kprimes(4, [10175, 10185, 10180, 10197]) => 3 because 10175-10185 and 10185- 10180 and 10180-10197 are all consecutive 4-primes.
// Note:

// It could be interesting to begin with: https://www.codewars.com/kata/k-primes

function primeFactors(num){
    var factors = []; 
    var i = 2; 
    
    while(i * i <= num){
      while(num%i == 0){
        factors.push(i); 
        num = num/i; 
      }
      i++; 
    }
    
    if (num > 1){
      factors.push(num); 
    }
    
    return factors.length; 
  };
  
function consecKprimes(k, arr) {
var count = 0; 

for(var i = 0; i<arr.length; i++){
    if(primeFactors(arr[i]) == k && primeFactors(arr[i+1]) == k){
    count++; 
    }
}

return count;  
}

// used the helper function to find the number of factors in the second function. 

