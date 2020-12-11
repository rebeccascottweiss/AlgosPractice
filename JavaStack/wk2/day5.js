// DLLNodes have a .next and .prev
class DLLNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

// DLLists have both a .head and .tail pointer
class DLList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // == Main Methods ==

    // push to head
    addHead(node) {
        if (this.isEmpty()){
            this.head = node; 
            this.tail = node; 
            this.length++; 
        } else {
            let current = this.head; 
            node.prev = current; 
            current.next = node; 
            this.head = node;   
            this.length++;
        }
    }

    // pop from tail
    removeTail() {
        if (this.size() == 1){
            this.head = null; 
            this.tail = null; 
            this.length = 0; 
        } else {
            let toRemove = this.tail; 
            this.tail = toRemove.next; 
            toRemove.next.prev = null; 
            toRemove.next = null; 
            this.length--; 
        }

    }

    // return is empty
    isEmpty() {
        if (this.head == null && this.tail == null){
            return true; 
        }

        return false; 
    }

    // return length
    size() {
        return this.length; 
    }

    // == Bonus Methods, just inverted versions of the first set ==

    // push to tail
    addTail(node){
        if (this.isEmpty()){
            this.head = node; 
            this.tail = node; 
            this.length++; 
        } else {
            let current = this.tail; 
            node.next = current; 
            current.prev = node; 
            this.tail = node;   
            this.length++;
        }
    }

    // pop from head
    removeHead(){
        if (this.size() == 1){
            this.head = null; 
            this.tail = null; 
            this.length = 0; 
        } else {
            let toRemove = this.head; 
            this.head = toRemove.prev; 
            toRemove.prev.next = null; 
            toRemove.prev = null; 
            this.length--; 
        }
    }
}

var myDLL = new DLList(); 

myDLL.addHead(new DLLNode(3)); 
myDLL.addHead(new DLLNode(6)); 
myDLL.addHead(new DLLNode(9));

console.log(myDLL.size()); 
myDLL.removeTail(); 
console.log(myDLL.size()); 

myDLL.addTail(new DLLNode(12)); 
console.log(myDLL.size()); 

myDLL.removeHead(); 
console.log(myDLL.size()); 



