// https://www.cs.usfca.edu/~galles/visualization/BST.html

class BSTNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
};

class BST {
    constructor() {
        this.root = null;
    }

    isEmpty(){
        return this.root === null;
    };

    // return true or false is val exists within the current tree
    // if current is undefined, current = this.root
    find(val, current) {
        if (current === undefined) {
            current = this.root;
        }

        if (current.val == val) {
            return true;
        } else if (current.val < val && current.left !== null) {
            current = current.left;
            this.find(val, current);
        } else if (current.val > val && current.right !== null) {
            current = current.right;
            this.find(val, current);
        }

        return false;
        // ... this.find(val, current.left/right)
    }

    // remove and return the smallest node of a given tree
    removeSmallest(current) {
        if (current === undefined) {
            current = this.root;
        }

        let smallest = this.getSmallestFromSubtree();
        while (current.left != smallest) {
            current = current.left;
        }

        current.left = null
        return smallest;

    }

    insert(node, current){
        if (current === undefined) {
            current = this.root;
        };

        // empty tree
        if (current === null) {
            this.root = node;
            return;
        };

        // go left
        if (current.val > node.val) {
            // check if null and add
            if (current.left === null) {
                current.left = node;
                return;
            } else {
                // else recurse left
                return this.insert(node, current.left);
            }
        // else go right
        } else if (current.val < node.val) {
            // check if null and add
            if (current.right === null) {
                current.right = node;
                return;
            } else {
                // else recurse right
                return this.insert(node, current.right);
            }
        }
    };

    // recursive
    getLargestFromSubtree(current) {
        // if no tree, tree is root
        if (current === undefined) {
            current = this.root;
        }

        // if tree becomes null, return null
        if (current === null) {
            return null;
        }

        // if there is no further nodes, return tree
        if (current.right === null) {
            return current.val;
        }

        // else recurse to the right and try again
        return this.getLargestFromSubtree(current.right);
    }

    // iterative
    getSmallestFromSubtree() {
        // create runner
        var runner = this.root;

        // return if root is null
        if(!runner) return;

        // loop to the left if it exists
        while (runner.left) {
            runner = runner.left;
        }
        // when the while ends, return runner.val
        return runner.val;
    }
};

// function that calls itself
// modifies the inputs
// so that the inputs eventual fail and end the recursive call

var myBST = new BST();
myBST.insert(new BSTNode(10));