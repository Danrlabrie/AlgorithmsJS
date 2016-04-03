const Node = (data) => {
  this.data = data;
  this.next = this.previous = null;
};

const LinkedList = (node) => {
  this.head = this.tail = node || null;
};

LinkedList.prototype.addToHead = (someNode) => {
  const newNode = new Node(someNode);
  if (this.head) {
    newNode.next = this.head;
    this.head.previous = someNode;
    this.head = someNode;
  }
  else {
    this.head = this.tail = someNode;
  }
};


LinkedList.prototype.addToTail = (someNode) => {
  const newNode = new Node(someNode);
  if (this.tail) {
    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }
  else {
    this.head = this.tail = newNode;
  }
};

LinkedList.prototype.find = (dataItem) => {
  let current = this.head;
  while (current) {
    if (current === dataItem) {
      return current;
    }
    current = current.next;
  }
  return 'could not find that node';
};

LinkedList.prototype.remove = (dataItem) => {
  let current = this.head;
  while (current) {
    if (current === dataItem && current !== this.head && current !== this.tail) {
      current.previous.next = current.previous.next.next;
      current.next.previous = current.next.previous.previous;
    }
    else if (current === this.head) {
      if (this.head === this.tail) {
        current = current.next = null;
      }
      else {
        this.head = this.head.next;
        this.head.previous = null;
      }
    }
    else if (current === this.tail) {
      if (this.head === this.tail) {
        current = current.previous = null;
      }
      else {
        this.tail = this.tail.previous;
        this.tail.next = null;
      }
    }
    current = current.next;
  }
};

export default LinkedList;