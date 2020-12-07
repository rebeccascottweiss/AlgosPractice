// Stacks

// A stack is a LIFO data structure
// LAST IN, FIRST OUT
// LIFO

// push - add to top
// pop - remove from top
// peek - check the top
// isEmpty - check if the stack is empty, true/false
// length - return size of stack



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

    length(){
        return this.items.length;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class slStack {
    constructor() {
        this.top = null; // this.top, this.end
        this.length = 0;
    }

    // add to top
    push(newNode) {
        if (this.isEmpty()){
            this.top = newNode; 
            this.length++; 
        } else {
            newNode.next = this.top; 
            this.top = newNode; 
            this.length++; 
        }
    }

    // remove from top
    pop() {
        if(this.isEmpty()){
            return; 
        } else {
            var temp = this.top; 
            this.top = this.top.next; 
            temp.next = null; 
            this.length--; 
            return temp; 
        }
    }

    // aka check top
    peek() {
        if(this.isEmpty()){
            return; 
        } else {
            console.log(this.top.data); 
        };

        return; 
    }

    // check if empty
    isEmpty() {
        return this.top === null;
    }

    // length getter
    getLength() {
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
    var counter = 0; 
    var temp = new slStack(); 

    while (!stack.isEmpty()){
        temp.push(stack.pop()); 
        counter++; 
    };

    while (!temp.isEmpty()){
        stack.push(temp.pop()); 
    }; 

    return counter; 
};


var testStack = new slStack(); 

testStack.push(new Node(1)); 
testStack.push(new Node(2)); 
testStack.push(new Node(3)); 
testStack.push(new Node(4)); 
testStack.peek(); 
console.log(testStack.getLength()); 
console.log(testStack.pop().data); 
testStack.peek(); 
console.log(testStack.getLength()); 
console.log(countStack(testStack)); 

