// Approach here is to split the string by words, reverse the resulting array, and join them back together.

// theres a little gotcha with this one in that we need to deal with any whitespace anywhere. we can do this by using
// a regex to split on all whitespace instead of a single space. However if there is leading whitespace or trailing 
// whitespace the regex is going to throw an additional empty string into our array, which will bollocks up the join,
// so we just check for and get rid of them with a shift() and pop(). 

// Runtime: O(n) for the split + O(1) for the pops/shifts + O(n) for each the reverse & join = O(3n) = O(n) time. O(n) space  


var reverseWords = function(str) {  
    str = str.split(/\s+/); 
    if(str[0] === '') str.shift();
    if(str[str.length-1] === '') str.pop();
    return str.reverse().join(" ");
};
