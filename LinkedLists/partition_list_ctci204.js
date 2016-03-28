// function that partitions a linked list around an input value. that is. if items are less than the value they will go to the left
// of the value in the list, if they are greater they will go to the right of the value in the list.

// The simplest way to do this one is to create a left hand linked list and a right hand linked list and then stitch them together at
// the end of the world. 

LinkedList.prototype.partition = (x) => {
  let ll_left = new LinkedList();
  let ll_right = new LinkedList();
  let current = this.head;
  while(current) {
    if(current.val <= x) {
      ll_left.addToTail(current)
    }
    else {
      ll_right.addToTail(current)
    }
    current = current.next;
  }
  ll_left.tail.next = ll_right.head;
  ll_left.tail = ll_right.tail;
  return ll_left;
} 

// This is O(n) for both space and time complexity.

// its possible we might be able to do this in place space-wise by iterating through and appending lesser values to our head
// and then deleting them, while leaving greater values put...


LinkedList.prototype.partitionInPlace = (x) => {
  let current = this.head;
  while(current) {
    if(current.val <= x) {
      this.addToHead(current)
      this.previous.next = this.next;
      this.next.previous = this.previous;
      this = null;
      current=current.next;
    }
    else {
      current=current.next;
    }
  }
}

//cool.