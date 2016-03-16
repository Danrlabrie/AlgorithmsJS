// function that, given an mxn matrix, returns a new mxn matrix whose rows and columns containing zeroes are set to all 0's. that is"

// [0,1,1] --> [0,0,0]
// [1,0,3] --> [0,0,0]
// [4,5,6] --> [0,0,6]

// This is pretty straightforward, the only trick is, if we change a row to 0's, we can't then use those 0's to create 0's otherwise
// every cell would fall to 0.

// so one way we can handle this is just to make multiple passes, first setting our 0's to something other than what we're changing
// it to.

let zeroize = arr => {
  for(let i=0; i<arr.length; i++){
      for(let j=0; j< arr[0].length; j++){
          if(arr[i][j] === 0) {
              arr[i][j] = '#';
          }
      }
  }
  for(let i=0; i<arr.length; i++) {
      let index = arr[i].indexOf('#')
      if(index !== -1) {
          for(let j=0; j< arr[i].length; j++) {
              arr[i][j] = 0;
          }
          for(let j=0; j<arr.length; j++) {
              arr[j][index] = 0
          }
      }
  }
  return arr
}

