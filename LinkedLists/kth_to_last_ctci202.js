// function that returns the kth to last element in a linked list.


// this is trivial if we're given the length of the linked list beforehand, or the tail,
// so lets assume we're not we could also pretty trivially just get the length in one pass
// and then get the kth to last element in the next. but we can do a little better using 2 pointers

// move both pointers out to k
// iterate one pointer to end, record length from k.
// iterate the other pointer length - k times. return that pointer.
// if length from k is less than k iterate from head k-lengthFromK times.

import LinkedList from './AA_LinkedList_DS.js';

LinkedList.prototype.kth_to_last = (k) => {
  let pointer1 = this.head;
  let pointer2 = this.head;
  let lengthFromK = 0;
  let l = k;
  // first we move our pointers out to k.
  while (l > 0) {
    if (!pointer2) {
      return 'List is not that long.';
    }
    pointer2 = pointer2.next;
    pointer1 = pointer1.next;
    l--;
  }
  l = k;
  while (pointer1) {
    pointer1 = pointer1.next;
    lengthFromK++;
  }

  if (lengthFromK > k) {
    while (lengthFromK - k) {
      pointer2 = pointer2.next;
      lengthFromK--;
    }
    return pointer2;
  }
  else {
    pointer1 = this.head;
    while (k - lengthFromK) {
      pointer1 = pointer1.next;
      l--;
      return pointer1;
    }
  }
};

// this is O(2n) = O(n) worst case, but we save a little bit of time in the case
// that our lengthFromK is longer than k,
// having iterated to k to begin with. O(1) space

