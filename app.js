// make a factory function named linkedList
function linkedList(headNode, tailNode) {
    const head = headNode;
    const tail = tailNode;
    
    const append = function(value) {
        const listNode = node(value, null)
        this.tail.next = listNode;
        this.tail = listNode;
    };

    const prepend = function(value) {
        const listNode = node(value, this.head)
        this.head = listNode
    };

    const toString = function() {
        runLinkedList(this.head)
    }
    
    const size = function() {
        const countObject = count.call(this)
        return countObject.i
    }
    
    const at = function(index) {
        if(index <= 0) {
            return console.log(`no Node here. list index starts at 1`)
        }
        const data = count.call(this, index)
        if(data.i < index) {
            return console.log(`your list does not have that much items in it. last index is ${data.i}`)
        }
        return console.log(data.node.value())
    }

    const pop = function() {
        const listSize = size.call(this)
        const lastNodeIndex = listSize - 1;
        const data = count.call(this, lastNodeIndex)
        const lastNode = data.node;
        lastNode.next = null;
    }

    const contains = function(defaultValue) {
        const value = defaultValue.toLowerCase();
        const data = count.call(this, undefined, value);
        const recievedValue = data.node.value();
        const lowerCaseValue = recievedValue.toLowerCase();
        return lowerCaseValue === value ? true : false
    }
    
    const find = function(defaultValue) {
        const value = defaultValue.toLowerCase();
        const data = count.call(this, undefined, value);
        const recievedValue = data.node.value();
        const lowerCaseValue = recievedValue.toLowerCase();
        return lowerCaseValue === value ? data.i : null
    }

    const insertAt = function(value, index) {
        index = index - 1
        const data = count.call(this, index)
        const newNode = node(value, data.node.next)
        data.node.next = newNode
    }
    
    const removeAt = function(index) {
        index = index - 1
        const data = count.call(this, index)
        const removingNode = data.node.next;
        data.node.next = removingNode.next
        removingNode.next = null;

    }
    
    return {head, tail, append, prepend, size, toString, at, pop, contains, find, insertAt, removeAt}
}

// make a factory function called node
function node(nodeData, nextNode) {
    let value = function() {
        return nodeData
    }
    let next = nextNode

    return {value, next}
}

let tailNode = node('Game of Thrones', null)
let item = node('Breaking Bad', tailNode)
let headNode = node('Sopranos', item)

let ourList = linkedList(headNode, tailNode)
ourList.append('Dexter')
ourList.append('Better Call Saul')
ourList.prepend('Friends')
ourList.toString()
console.log(ourList.size());
ourList.at(2)
ourList.pop()
console.log(ourList.size())
console.log(ourList.contains('breaking bad'))
console.log(ourList.find('game of thrones'))
ourList.insertAt('Rick And Morty', 4)
ourList.toString()
console.log(ourList.find('game of thrones'))
ourList.removeAt(3)
ourList.toString()
// build a function to crawl into the linkedList and display every node
function runLinkedList(node) {
    console.log(`data = ${node.value()}`)
    if(node.next === null) {
        return
    }
    runLinkedList(node.next)
    
}

// make a function to count count items insise the list
function count(ind, val, n = this.head){
    let i = 0;
    function __count(node = n, value = val, index = ind){
        i++
        let nodeValue = node.value()
        if(node.next === null || i === index || nodeValue.toLowerCase() === value) {
            return {i, node}
        }
        return __count(node.next, index)
    };
    return __count(); 
    
}