// Queue
// FIFO (First in, first out)


class Queue {
    constructor() {
        this.front = null; // "front of the line"
        this.rear = null; // "back of the line"
        this.length = 0;
    }

    // what if the queue is empty?
    // what if it's the last node in the queue?

    // add to the rear
    enqueue(node) {
        if (this.isEmpty()){
            this.front = node; 
            this.rear = node; 
        } else {
            this.rear.next = node; 
            this.rear = node; 
        }
        this.length++; 
    }

    // remove from the front
    dequeue() {
        if(this.isEmpty()){
            return null; 
        } 

        if(this.getLength() == 1){
            let temp = this.front; 
            this.front = null; 
            this.rear = null; 
            this.length--; 
            return temp; 
        }
        
        let temp = this.front; 
        this.front = this.front.next; 
        temp.next = null; 
        this.length--; 
        return temp; 

    }

    // check the front of the queue
    checkFront() {
        return this.front; 
    }

    // return if empty
    isEmpty() {
        if(this.front == null && this.rear == null){
            return true; 
        }
        return false; 
    }

    // return length
    getLength() {
        return this.length; 
    }
}

// print every value in the queue
// you may only use one queue or stack for additional storage
// return the queue back to it's original order when you are done
function readQueue(queue) {
    var temp = new Queue(); 

    while(!queue.isEmpty()){
        let node = queue.dequeue(); 
        temp.enqueue(node); 
        console.log(node.data); 
    }

    while(!temp.isEmpty()){
        let node = temp.dequeue(); 
        queue.enqueue(node); 
    }

}


// Stacks

// A stack is a LIFO data structure
// LAST IN, FIRST OUT
// LIFO

// first in, first out

class arrStack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        if (this.items.length === 0) {
            return true;
        }
        return false;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class DLNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class slStack {
    constructor() {
        this.top = null; // this.head, this.end
        this.length = 0;
    }

    // add to top
    push(newNode) {
        if (this.top === null) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
    }

    // remove from top
    pop() {
        if (this.top === null) return null;

        const removed = this.top;
        this.top = this.top.next;
        removed.next = null;
        this.length--;

        return removed;
    }

    // aka check top
    peek() {
        return this.head ? this.head.data : null;
    }

    // check if empty
    isEmpty() {
        return this.head === null;
    }

    length() {
        return this.length;
    }
}

// buh buh bonus challenge: countStack

// write the standalone function countStack
// given a slStack, count the nodes
// return the count
// you may use one stack or array as additional storage
// the given stack must be returned back to it's original order
// you may only use public stack methods push pop peek isempty
function countStack(stack) {
    let newStack = new slStack();
    let count = 0;

    while (!stack.isEmpty()) {
        let node = stack.pop();
        newStack.push(node);
        count++;
    }

    while (!newStack.isEmpty()) {
        stack.push(newStack.pop());
        h
    }

    return count;
};

var testQue = new Queue(); 

testQue.enqueue(new Node(5)); 
testQue.enqueue(new Node(15)); 
testQue.enqueue(new Node(25)); 
testQue.enqueue(new Node(35)); 
testQue.enqueue(new Node(45));
console.log(testQue.getLength()); 
var num = testQue.checkFront();
console.log(num.data);  
testQue.dequeue(); 
console.log(testQue.getLength()); 
readQueue(testQue); 

