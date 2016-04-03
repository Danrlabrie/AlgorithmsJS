// function that, given two intersecting linked lists, returns the intersecting node.

// this one is fairly straightforward. the lists may have differing lengths,
// but we know that two linked lists will always have the same final node.
// so we just need to iterate through both until the end node. record the length of each, and then
// iterate through the longer one until we hit the shorter length, then pace both until we hit
// the intersection.

let findIntersection = (ll1, ll2) => {
  let length1 = 0;
  let length2 = 0;
  let current1 = ll2.head;
  let current2 = ll1.head;

  while (current1 || current2) {
    if (current1 === current2) return current1; // short circuit if we have lists of the same length
    if (current1) {
      current1 = current1.next;
      length1++;
    }
    if (current2) {
      current2 = current2.next;
      length2++;
    }
  }

  let longer = length2 > length1 ? ll2.head : ll1.head;
  let shorter = longer === ll2.head ? ll1.head : ll2.head;

  // eat up longer to get to same lengths
  for (let i = Math.abs(length1 - length2); i > 0; i--) {
    longer = longer.next;
  }

// iterate through until we hit the intersecting node.
  while (longer !== shorter) {
    longer = longer.next;
    shorter = shorter.next;
  }
  return longer;
};

// cool. This is O(n) for getting the lengths, where n is the largest list.
// then O(n - k)?? to even up the lists then O(k) worst case for the last iteration.