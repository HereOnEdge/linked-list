// make a factory function named linkedList
function linkedList(headNode, tailNode = null) {
  const head = headNode;
  let tail;
  if (tailNode === null) {
    tail = headNode;
  } else {
    tail = tailNode;
  }

  // append function, gets a value and creates a new Node with the given value and appeands the node to end of the list
  const append = function (value) {
    const newNode = node(value, null, this.tail);
    this.tail.next = newNode;
    this.tail = newNode;
  };

  // prepend function, gets a value and creates a new Node and appeands it to the start of list
  const prepend = function (value) {
    const newNode = node(value, this.head, null);
    this.head.back = newNode;
    this.head = newNode;
  };

  // toString function, console.log's the entire list one by one
  const toString = function () {
    runLinkedList(this.head);
  };

  // size function, returns a number that is the length of the list. starting at index 1
  const size = function () {
    const countObject = count.call(this);
    return countObject.i;
  };

  // function at, gets an index and returns the value of the given index inside the list. returns an error if index is not correct
  const at = function (index) {
    if (index <= 0) {
      return console.log(`no Node here. list index starts at 1`);
    }
    const data = count.call(this, index);
    if (data.i < index) {
      return console.log(
        `your list does not have that much items in it. last index is ${data.i}`
      );
    }
    return console.log(data.node.value());
  };

  // function pop, removes the last of the list
  const pop = function () {
    const listSize = size.call(this);
    const lastNodeIndex = listSize - 1;
    const data = count.call(this, lastNodeIndex);
    const lastNode = data.node;
    lastNode.next.back = null;
    lastNode.next = null;
  };

  // function contains, gets a value and returns true if the value is found inside the list. returns false if value is not found
  const contains = function (defaultValue) {
    let value =
      typeof defaultValue === "string"
        ? defaultValue.toLowerCase()
        : defaultValue;
    let data = count.call(this, undefined, value);
    let recievedValue = data.node.value();
    if (typeof value === "object") {
      recievedValue = JSON.stringify(data.node.value());
      value = JSON.stringify(value);
    }
    let lowerCaseValue =
      typeof defaultValue === "string"
        ? recievedValue.toLowerCase()
        : recievedValue;
    return lowerCaseValue === value ? true : false;
  };

  // function find, gets a value and returns the node of the given value, returns null if the value is not found
  const find = function (value) {
    const data = count.call(this, undefined, value);
    const recievedValue = data.node.value();
    return JSON.stringify(recievedValue) === JSON.stringify(value)
      ? data.node
      : null;
  };

  // function findIndex, gets a value and returns the index of the given value inside the linkedList, returns null if the value is not found
  const findIndex = function (value) {
    const data = count.call(this, undefined, value);
    const recievedValue = data.node.value();
    const recievedIndex = data.i;
    return JSON.stringify(recievedValue) === JSON.stringify(value)
      ? recievedIndex
      : null;
  };
  // function inserAt, gets a value and an index and creates a new Node with the given value and insrets the Node at the given index
  const insertAt = function (value, index) {
    index = index - 1;
    const data = count.call(this, index);
    const newNode = node(value, data.node.next, data.node);
    data.node.next = newNode;
    newNode.next.back = newNode;
  };

  // dunction removeAt, gets an index and removes the Node inside the list at the given index
  const removeAt = function (index) {
    index = index - 1;
    const data = count.call(this, index);
    const removingNode = data.node.next;
    removingNode.next.back = data.node;
    data.node.next = removingNode.next;
    removingNode.next = null;
    removingNode.back = null;
  };

  return {
    head,
    tail,
    append,
    prepend,
    size,
    toString,
    at,
    pop,
    contains,
    find,
    insertAt,
    removeAt,
    findIndex,
  };
}

// make a factory function called node to create a new Node
function node(nodeData, nextNode, prevNode) {
  let value = function () {
    return nodeData;
  };
  let next = nextNode;
  let back = prevNode;

  return { value, next, back };
}

// build a function to crawl into the linkedList and display every node
function runLinkedList(node) {
  console.log(`data = ${node.value()}`);
  if (node.next === null) {
    return;
  }
  runLinkedList(node.next);
}

// make a function to count items insise the list
function count(ind, val, n = this.head) {
  let i = 0;
  function __count(
    node = n,
    value = typeof val === "object" ? JSON.stringify(val) : val,
    index = ind
  ) {
    i++;
    let nodeValue =
      typeof val === "object" ? JSON.stringify(node.value()) : node.value();
    if (node.next === null || i === index || nodeValue === value) {
      return { i, node };
    }
    return __count(node.next, index);
  }
  return __count();
}

export { node, linkedList };
