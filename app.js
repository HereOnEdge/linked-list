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
    return {head, tail, append, prepend, size, toString, at, pop}
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
ourList.pop()
ourList.at(5)
ourList.at(4)
console.log(ourList.size())
// build a function to crawl into the linkedList and display every node
function runLinkedList(node) {
    console.log(`data = ${node.value()}`)
    if(node.next === null) {
        return
    }
    runLinkedList(node.next)
    
}

// make a function to count count items insise the list
function count(ind, n = this.head){
    let i = 0;
    function __count(node = n, index = ind){
        i++
        if(node.next === null || i === index) {
            return {i, node}
        }
        return __count(node.next, index)
    };
    return __count(); 
    
}