// function that takes two strings and returns true if the strings are 1 edit apart. with an edit defined as:
// 1. insert a character
// 2. delete a character
// 3. replace a character

// We can reduce this to a simpler problem, by thinking about it a little differently. an insertion is really just a deletion of its
// opposite string and a replacement is like a deletion from both strings.


'use strict'

let isOneAway = (str1, str2) => {
    if(Math.abs(str1.length - str2.length) > 1) return false;  //short circuit if impossible in 1 edit.
    if(str1 === str2) return true // if the same return true, skip loop.
    let strLonger = str1.length > str2.length ? str1 : str2; //get longer string
    let otherString = strLonger === str1 ? str2 : str1; // get shorter string (or just other string, if they're equal.)
    for(let i=0; i<strLonger.length; i++) {
        let strTemp1 = strLonger.slice(0,i) + strLonger.slice(i+1,strLonger.length); // deletion (addition too)
        let strTemp2 = otherString.slice(0,i) + otherString.slice(i+1,strLonger.length);
        console.log('1', strTemp1, '2', strTemp2)
        if(strTemp1 === otherString || strTemp1 === strTemp2) return true;
    }
    return false;
}



