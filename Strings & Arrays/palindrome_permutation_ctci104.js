'use strict'

// function that takes a string and returns a boolean based on whether one is a permutation of a palindrome of another. that is,
// if the letters of the string can be re-arranged such that they form a palindrome.


//  so how might we approach this? one way would be to just generate all the possible permutations of the input string, and then do a palindrome check on those. but we can do better. What is the nature of a palindrome? well they all have an even number of letters, except for maybe one. So one approach we might take is to bucket each of these to a hash table and then check if more than 1 has 1 letter, if it is return false, if its not, return true.

let isPalindromePermutation = (str) => {
    str = str.split(/s+/).join();
    let obj = {};
    let checker = 0;
    for(let i=0; i< str.length; i++) {
        if(obj.hasOwnProperty(str[i])) {
            obj[str[i]]++;
        }
        else {
            obj[str[i]] = 1;
        }
    }
    for(let k in obj) {
        if(obj[k] % 2 === 1) {
            checker++
        } 
        if(checker === 2) return false
    }
    return true;
}

// So this is like....O(n) for the original loop + O(k) => approximately O(n) because our object will never be more than a set # of chars.
// Space is O(n) beause of the hash table.