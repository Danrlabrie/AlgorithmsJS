// write a function that will replace the whitespace in a string by '%20' like a url encoder does.

// this is pretty similar to the reverseWords function, its mostly about handling additional whitespace


// easiest will be to use .replace with a regex:


let urlify = str => {
  str = str.replace(/\s+/g, '%20');
  if (str.slice(0,3) === '%20') {
    str = str.slice(3, str.length)
    
  }
  if (str.slice(str.length - 3, str.length) === '%20'){
    str = str.slice(0, str.length -3);
  }
  return str;
}


// so we basically just do a global replace on all consecutive whitespace and then check the front and back end of the string, deleting
// any extra if it exists. recall that slice is exclusive, by bounds, so you usually need to slice to +1 the index that you want.