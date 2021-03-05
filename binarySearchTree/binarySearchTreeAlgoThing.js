export class BSTNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
};


export class BST {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    };


    // findAndDelete
    delete(val, current) {
        if(current === undefined){
            current = this.root; 
        }

        if(this.find(val) == false){
            return null; 
        }

        if(current.right.val == val){
            let swapped = this.removeSmallest(current.right.right);
            swapped.right = current.right.right; 
            swapped.left = current.right.left;  
            current.right = swapped; 
            
        }

        if(current.left.val == val){
            let swapped = this.removeLargest()
        }


        return current; 
    }

    // Preorder (DFS - Depth First Search)
    // (Root / Parent, Left, Right)
    // 25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90
    printPreorder(current) {
        if (current === undefined) {
            current = this.root;
        }

        if (current) {
            // read everything, then recurse
            console.log(current.val); // 25
            this.printPreorder(current.left); // 15
            this.printPreorder(current.right); // 50
        }
    }

    // Inorder (DFS)
    // (Left, Root / Parent, Right)
    // 4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90
    printInorder(current) {
        if (current === undefined) {
            current = this.root;
        }

        if (current) {
            // recurse left, then read, then recurse right
            this.printInorder(current.left);
            console.log(current.val);
            this.printInorder(current.right);
        }
    }

    // Postorder (DFS)
    // (Left, Right, Root / Parent)
    // 4, 12, 10, 18, 24, 22, 15, 31, 44, 35, 66, 90, 70, 50, 25
    printPostorder(current) {
        if (current === undefined) {
            current = this.root;
        }

        if (current) {
            // recurse in both directions, then read
            this.printPostorder(current.left);
            this.printPostorder(current.right);
            console.log(current.val);
        }
    }

    // Levelorder (BFS - Breath first search)
    // Row-by-row left-right top-down
    // 25, 15, 50, 10, 22, 35, 70, 4, 12, 18, 24, 31, 44, 66, 90
    printLevelorder(current) {
        if (current === undefined) {
            current = this.root;
        };

        var queue = []; // "queue"

        if (current) {
            queue.push(current);
        }

        while (queue.length > 0) {
            var dequeuedNode = queue.shift(); // should probably import our actual queue
            console.log(dequeuedNode.val);

            if (dequeuedNode.left) {
                queue.push(dequeuedNode.left);
            }

            if (dequeuedNode.right) {
                queue.push(dequeuedNode.right);
            }
        }
    }


    // return true or false is val exists within the current tree
    // if current is undefined, current = this.root
    find(val, current) {
        if (current === undefined) {
            current = this.root;
        }

        // if current is null, return false up the call stack
        if (current == null) {
            return false;
        }

        // because current is certain to be not null, check val vs val
        // if equal, return true up the call stack
        if (current.val === val) {
            return true;
        }

        // otherwise we need to recurse

        // decide on which direction
        if (current.val > val) {
            current = current.left;
        } else {
            current = current.right;
        }

        // recurse now that current is moved, return the result
        return this.find(val, current);// true / false
    }

    // remove and return the smallest node of a given tree
    removeSmallest(current) {
        if (current === undefined) {
            current = this.root;
        }

        // first iteration possibly move the head
        if (current.left === null) {
            this.root = current.right;
            current.right = null;
            return current;
        }

        // look ahead
        if (current.left && (current.left.left === null)) {
            var smallest = current.left;
            current.left = smallest.right;
            smallest.right = null;
            return smallest;
        }

        return this.removeSmallest(current.left);
    }

    // remove and return the smallest node of a given tree
    removeLargest(current) {
        if (current === undefined) {
            current = this.root;
        }

        // ..
    }

    // recursive
    insert(node, tree) {
        if (tree === undefined) {
            tree = this.root;
        };

        if (tree === null) {
            this.root = node;
            return;
        };

        // go left
        if (tree.val > node.val) {
            // check if null and add
            if (tree.left === null) {
                tree.left = node;
                return;
            } else {
                // else recurse left
                return this.insert(node, tree.left);
            }
            // else go right
        } else if (tree.val < node.val) {
            // check if null and add
            if (tree.right === null) {
                tree.right = node;
                return;
            } else {
                // else recurse right
                return this.insert(node, tree.right);
            }
        }
    };

    // recursive
    getLargestFromSubtree(tree) {
        // if no tree, tree is root
        if (tree === undefined) {
            tree = this.root;
        }

        // if tree becomes null, return null
        if (tree === null) {
            return null;
        }

        // if there is no further nodes, return tree
        if (tree.right === null) {
            return tree.val;
        }

        // else recurse to the right and try again
        return this.getLargestFromSubtree(tree.right);
    }

    // iterative
    getSmallestFromSubtree(tree) {
        // if tree is null, return it
        if (tree.root === null) return tree.root;

        // else create runner
        var runner = tree.root;
        // loop to the left if it exists
        while (runner.left) {
            runner = runner.left;
        }
        // when the while ends, return runner.val
        return runner.val;
    }
};

/*
    Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.

        Input:
        3
       / \
      9  20
        /  \
      15    7
    Output: [3, 14.5, 11]
    Explanation:
    The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].

    The range of node's value is in the range of 32-bit signed integer.
*/


function avgLevelBST (root, level = 0, levelArr = []) {
    // so we want to know how many nodes exist in the tree AND the levels of each node
    // to find the average
    // so first thing we will do in every function call is increase our variables levelSums and nodeCount
    
    
    if(root.right){
        levelArr= avgLevelBST(root.right, level) // okay this is harder
    }
    if(root.left){
        levelArr = avgLevelBST(root.left, level)
    }

    //You input the node and the level

    //You look down one from that level (left/right) and get the sum of those node.data values (so 9 + 20 or 15 + 7) and increment a count for every value found
    // store it in an object? [[3,1],[29,2],[22,2]] so that you can continue to add to the level as you move to the other side of the tree? 
    // but we will need to return the object to access it on the base level... 
    // thanks, sorry this was hard af byyyyeeee

    return levelArr;
}

var tree = new BST();
tree.insert(7).insert(3).insert(15).insert(20).insert(9);