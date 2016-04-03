// function that deletes a node in a singly linked list given access
// only to that node, not the head or tail of the list.

// This requires a little thought about how the linked list is actually working
// - we have a series of nodes which each have a reference
// to one sibling node. So somehow we need to preserve the reference of the
// previous node to the node we're deleting, so that the list
// remains unbroken, but still deleting that node.

// We can do this by overwriting values of our node in question
// so it still hold as a reference but assumes the value of the next node in the list:

import LinkedList from './AA_LinkedList_DS.js';

LinkedList.prototype.deleteMe = () => {
  if (this.next) { // as long as we're not the last node in the list.
    this.value = this.next.value; // overwrite to next node's value
    if (this.next.next) {  // if there is a 2nd sibling down.
      this.next = this.next.next; // set the next of current node to the 2nd sibling down.
    }
    else {
      this.next = null;  // if this is the 2nd to last node, make it the tail.
    }
  }
  else {
    this.tail = null; // if this is already the tail, just set it to null;
  }
};

// cool, this is O(1) for both time and space complexity.