// function that returns a boolean true/false if a linked list is a palindrome or not.

// we can use a two pass approach here. create a reverse copy of the list,
// then iterate through both to midpoint and compare.

import LinkedList from './AA_LinkedList_DS.js';

LinkedList.prototype.isPalindrome = () => {
  let current = this.head;
  const reversell = new LinkedList();
  let linkedListLength = 0;
  while (current) {
    reversell.addToHead(current.data);
    current = current.next;
    linkedListLength++;
  }

  current = this.head;
  let reverseCurrent = reversell.head;
  for (let i = 0; i < Math.ceil(linkedListLength / 2); i++) {
    if (reverseCurrent.data !== current.data) return false;
    current = current.next;
    reverseCurrent = current.next;
  }
  return true;
};

// O(n) time and space.

