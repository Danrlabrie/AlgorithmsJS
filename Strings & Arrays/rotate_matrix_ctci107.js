// given some image, represented by an MxN matrix - write a method to rotate the image by 90 degrees.

// [0,1]     [1,1,0]
// [1,0] ==> [1,0,1]
// [1,1] 

// approach: slice vertically, put in first array, continue until next. so this basically goes how you'd think.
// a little wonky in the middle - like the outer loop is really a loop over a subarray, and the inner loop is a loop over
// the array of arrays. other than that - its pretty much how you'd expect.

let rotateArray = arr => {
  let output = [];
  let subarr = [];
  for(let i=0; i<arr[0].length; i++) { // loop over inner arrays
    for(let j=0; j<arr.length; j++) { // loop over outer arrays
    subarr.unshift(arr[j][i]);
    }
    output.push(subarr);
    subarr = [];
  }
  return output;
};

// this is O(m * n) as we're touching every element once.