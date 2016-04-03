// given a linkedList, write a function that will remove all duplicates within the list.

// there are pretty much two approaches here,
// we can either iterate through checking elements and then iterate back through for each
// element. This is O(n^2) time but is in-place.

// or more likely, we can iterate through and shove each value in a hash-table and then
// delete nodes by re-writing pointers if we hit a collision. Lets go with this approach.

// the below just uses a vanilla JS object, in the interest of time.
// It also assumes we've already created a remove method for the LL.

import LinkedList from './AA_LinkedList_DS.js';

LinkedList.prototype.removeDupes = () => {
  const HASHTABLE = {};
  let current = this.head;
  while (current) {
    if (HASHTABLE.hasOwnProperty(current.data)) {
      this.head.remove(current.data);
    }
    else {
      HASHTABLE[current.data] = current.data;
    }
    current = current.next;
  }
};

// easy peazy.