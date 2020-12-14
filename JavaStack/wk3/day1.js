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

    // add node before target if target exists
    // target is a node data
    prepend(target, node) {
        var runner = this.head; 
        if (this.isEmpty()) return; 

        if(this.head.data == target){
            console.log("The target is the head")
            this.head.prev = node; 
            node.next =  this.head; 
            this.head = node; 
            this.length++; 
            return; 
        } 
        while(runner.next != null){
            if(runner.data == target){
                runner.prev.next = node; 
                node.next =  runner; 
                node.prev = runner.prev; 
                runner.prev = node;
                this.length++; 
                return; 
            }

            runner = runner.next; 
        }

        return; 
    }

    // push to head
    addHead(node) {
        if (!this.head) { // empty list
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.length++;
    }

    // pop from tail
    removeTail() {
        if (this.head == null) return; // empty list
        if (this.head === this.tail) { // one node
            var temp = this.tail;
            this.head = null;
            this.tail = null;
            this.length--;
            return temp;
        }
        var temp = this.tail;
        this.tail = temp.prev;
        this.tail.next = null;
        temp.prev = null;
        this.length--;
        return temp;
    }

    // return is empty
    isEmpty() {
        return this.head === null;
    }

    // return length
    size() {
        return this.length;
    }


    // == Bonus Methods, just inverted versions of the first set ==

    // push to tail
    addTail(node){}

    // add after target if exists
    append(target, node){}

    // pop from head
    removeHead(){}
}

//Test Cases

var myDLL = new DLList(); 
myDLL.addHead(new DLLNode(3)); 
myDLL.addHead(new DLLNode(6)); 
myDLL.addHead(new DLLNode(7)); 
console.log(myDLL.size()); 

myDLL.prepend(3, new DLLNode(8)); 
console.log(myDLL.size()); 