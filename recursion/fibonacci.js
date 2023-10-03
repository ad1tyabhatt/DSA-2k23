/**
 * fibonacci starts with 0 and 1
 * 
 * 0 1 1 2 3 5 8 13 21 34...
 * 0 1 2 3 4 5 6  7 8  9
 * 
 *  f(n) = f(n-1)+f(n-2)
 * 
 *  n=>0  return 0;
 * 
 *  if n=1 return 1;
 */

//! recursive approach

//method 1 without storing the values


//& TC = O(2^n)  SC= O(n)

function fib(n){
    if(n<=1) return n;
    else{ 
        return fib(n-1) + fib(n-2)
    }
}

console.log(fib(4))

// Method 2 : recursion + store

// storing significantly decreases the TC


















