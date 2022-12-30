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
        let i = 0;
        function count(node = this.head){
            i++
            if(node.next === null) {
                return console.log(i)
            }
            count(node.next)
        }
        count.call(this)
    }
    
    return {head, tail, append, prepend, size, toString}
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
ourList.size();
// build a function to crawl into the linkedList and display every node
function runLinkedList(node) {
    console.log(`data = ${node.value()}`)
    if(node.next === null) {
        return
    }
    runLinkedList(node.next)
    
}
