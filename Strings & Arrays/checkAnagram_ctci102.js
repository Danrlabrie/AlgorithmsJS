'use strict'

//function that takes in two strings and returns a boolean if they are anagrams of each other.

//1st approach - sort them both, and check if =

let anagramChecker = (str1, str2) => str1.split('').sort().join() === str2.split('').sort().join();

// This is O(n+k) for the split + O(nlogn + klogk) for the sort + O(n + k) for the join. cool one liner but we can probably do better.
// also we can probably optimize to do an early return based on length.

let anagramChecker = (str1, str2) => {
  if(str1.length !== str2.length) return false;
  let total1 = 0;
  let total2 = 0;
  for(let i=0; i< str1.length; i++) {
    total1 += str1.charCodeAt(i);
    total2 += str2.charCodeAt(i);
  }
  return total1 === total2;
}

// here we get just O(n), we can reduce the big O to a single variable in this case because the function will always short circuit
// if the two inputs have different length, so we can just single loop over.