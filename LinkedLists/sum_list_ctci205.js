// function that sums two linked lists, as if the lists represent values stored in reverse order.

// so 6 -> 3 -> 5 -> 2
// +  9 -> 1 -> 3 -> 7
// = 2536 + 7319 =
// 5 -> 5 -> 8 -> 9

// so we can basically work our way through both lists, 
// summing to just a number value and then break that into
// a linkedlist at the end of the world.

import LinkedList from './AA_LinkedList_DS.js';

let sumLists = (ll1, ll2) => {
  let current1 = ll1.head;
  let current2 = ll2.head;
  let base = 1;
  let total = 0;
  const output = new LinkedList();

  while (current1 || current2) {
    const first = !!current1.data ? current1.data : 0;
    const second = !!current1.data ? current1.data : 0;
    total += (first + second) * base;
    base = base * 10;
    current1 = current1.next;
    current2 = current2.next;
    base = base * 10;
  }
  total = String(total);
  for (let i = 0; i < total.length; i++) {
    output.addToTail(Number(total[i]));
  }
  return output;
};


// so this is O(n) for iterating through the lists. where n is the length of the longer list.
// then O(n) again for building the final list. So both O(2n) = O(n) for time and space.

// What about the opposite case, where the numbers in the lists are represented forwards
// in this case its more difficult to account for the case where we have lists of different length.
// we would really need to know the length of the lists in order to pad out the front of the shorter
// with 0's, which involves iterating through the list anyway. So instead of having to deal
// with carrying values over, we can just reverse the lists.

let sumListsForward = (ll1, ll2) => {
  let current1 = ll1.head;
  let current2 = ll2.head;
  const reverse1 = new LinkedList();
  const reverse2 = new LinkedList();
  while (current1 || current2) {
    if (current1) {
      reverse1.addToHead(current1.data);
    }
    if (current2) {
      reverse2.addToHead(current2.data);
    }
    current1 = current1.next;
    current2 = current2.next;
  }


  return sumLists(reverse1, reverse2);
};

// this seems about equally performant to me.