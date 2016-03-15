'use strict'

// given a string, return another string, compressed by letter occurance, so an input of:
// 'aaaabbbaccee' -->  'a4b3a1c2e2'
// ignore case

// so if we start with a string, we can initialize some count and letter variables, and as soon as we hit a letter that
// isnt equal to the one we have stored, we can dump to output, and rewrite our vars to the new letter and 0.

let compress = str => {
    let currletter=str[0],
    count = 0,
    output='';
    for(let i=0; i<str.length; i++){
        if(str[i].toLowerCase() === currletter) count++;
        else {
            output += count += currletter;
            currletter = str[i];
            count=1;
        }
    }
    output += count += currletter;
    return output;
};