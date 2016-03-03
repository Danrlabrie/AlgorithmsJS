// Algorithm to check if a string has all unique characters.

// There are two possible approaches,

// 1. Sort the string first and loop through looking for adjacent characters.  
// this is O(nlog(n)) for the sort and + n for the lookup. 

// 2. Throw each character into a hash table, and check for collisions. This is O(n) space and O(n) time.
// but slightly worse than the above for space.

// Note: this implementation is just dumping to an object rather than an actual hash, in the interest of time.

function isUnique (input) {  
 var uniquenessObj = {};
 for(var i=0;i<input.length; i++) {
   if(uniquenessObj.hasOwnProperty(input[i])) return false;
   else uniquenessObj[input[i]] = 'exists'; 
   continue;
 }
 return true;
}