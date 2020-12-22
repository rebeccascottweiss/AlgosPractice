// https://www.cs.usfca.edu/~galles/visualization/BST.html

class BSTNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
};

var myBST = new BST();
myBST.insert(new BSTNode(10));

class BST {
    constructor() {
        this.root = null;
    }

    isEmpty(){
        return this.root === null;
    };

    insert(node, current){
        if(!current) current=this.root;

        if(current.val > node.val && current.right != null){
            this.insert(node, current.right)
        } else if (current.val > node.val && current.right == null) {
            current.right = node;
        }

        if(current.val < node.val && current.left != null){
            this.insert(node, current.left)
        } else if (current.val < node.val && current.left == null){
            current.left = node;
        }

        return;
    };

    getLargestFromSubtree(current){
        if(current.right != null){
            this.getLargestFromSubtree(current.right);
        }

        return current.val;
    }

    getSmallestFromSubtree(current){
        if(current.left != null){
            this.getSmallestFromSubtree(current.left);
        }

        return current.val;
    }
};