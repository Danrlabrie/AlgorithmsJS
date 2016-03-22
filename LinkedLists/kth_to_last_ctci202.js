// function that returns the kth to last element of a linked list.

// there are a few things that would make this a trivial problem. mainly - if we're given the tail and the list is doubly-linked.
// or if we're given the length of the ll from the get.

// so lets assume we have a signly linked list, and we don't know the length.

LinkedList.prototype.kthToLast = (k) => {
  let pointer1 = this.head,
  pointer2 = this.head,
  i=k,
  length_from_k;
  while(i) {
    if(!pointer1) return "Not Enough Nodes!"
    pointer2 = pointer2.next;
    pointer1 = pointer1.next;
    i--;
  }
  while(pointer2) {
    pointer2 = pointer2.next;
    length_from_k++;
  }
  if(length_from_k < k) {
    pointer1 = this.head;
    while(k - length_from_k) {
      pointer1 = pointer1.next;
      length_from_k--
    }
  }
  else {
    while(length_from_k -k) {
      k--;
      pointer1=pointer1.next;
    }
  }
  return pointer1;
}

// so here we first iterate both pointers to k
// then the 2nd pointer to the end of the list, recording the distance from k
// if the distance is less than k. we restart pointer1 from the beginning and move it k-lfk iterations. returning that node.
// otherwise we iterate lfk -k from k to get our node k nodes from the end and return it at the end of the world.
// this is MAYBE a bit optimized over just getting the full length and then iterating from the beginning, if we hit the 2nd case.

