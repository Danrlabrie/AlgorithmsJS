// given a linkedList, write a function that will remove all duplicates within the list.

// there are pretty much two approaches here, we can either iterate through checking elements and then iterate back through for each
// element. This is O(n^2) time but is in-place.

// or more likely, we can iterate through and shove each value in a hash-table and then delete nodes by re-writing pointers if we hit
// a collision. Lets go with this approach.

// the below just uses a vanilla JS object, in the interest of time. It also assumes we've already created a remove method for the LL.

LinkedList.prototype.removeDupes = () => {
  let hashTable = {}
  let current = this.head;
  while(current) {
    if(hashTable.hasOwnProperty(current.data) {
      this.head.remove(current.data);
    })
    else {
      hashTable[current.data] = current.data;
    }
  }
}

// easy peazy.