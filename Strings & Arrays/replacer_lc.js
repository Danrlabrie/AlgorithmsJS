// Given a string composed of a's and b's, return a string with all intances of 'aa' replaced with 'a' and all instances of 'bb'
// replaces with 'b'.

// There are two approaches here, one is to use regexs and another using a traditional loop.


var replacer = function (str) {  
    return str.replace(/aa/g, 'a').replace(/b/g, 'bb');
};


// non regex version, looping through comparing adjacent values. be careful of edge cases & +1 errs.

var replacerNonRegex = function (str) {  
    outStr = '';
    for(var i=0;i<str.length;i++) {
        if(str[i] === 'b') outStr += 'bb';
        else if(str[i] === 'a' && str[i+1] === 'a'){
                  outStr+='a'; 
                  i++;  
        } 
        else outStr+='a';
    }
    return outStr;
};