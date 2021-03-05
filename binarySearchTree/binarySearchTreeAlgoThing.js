class BSTNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
};

//node didn't like export for some reason? 
class BST {
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
            return this;
        };

        // go left
        if (tree.val > node.val) {
            // check if null and add
            if (tree.left === null) {
                tree.left = node;
                return this;
            } else {
                // else recurse left
                return this.insert(node, tree.left);
            }
            // else go right
        } else if (tree.val < node.val) {
            // check if null and add
            if (tree.right === null) {
                tree.right = node;
                return this;
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


function avgLevelBST (root, level = 0, levelArr = [[0, 0]]) {
    //root is 3
    // level is 0
    // levelArr is [[0,0]]
    //checks to be sure there is an array value at the current level, if not creates one
    if(!levelArr[level]){
        levelArr[level] = [0, 0]; 
    }

    let sum = levelArr[level][0]; 
    //sum is now 0
    let count = levelArr[level][1]; 
    //count is now 0
    sum += root.val;
    //sum is now 3 
    levelArr[level] = [sum, ++count]
    //levelArr is now [[3, 1]]
    
    //then you check for something to the nodes right or left
    if(root.right){
        //and reset the val... to the return of the function passing the original val in... 
        levelArr= avgLevelBST(root.right, level + 1, levelArr)
        //so you are passing the function (20, 1, [[3,1]])
    }

    if(root.left){
        levelArr = avgLevelBST(root.left, level + 1, levelArr)
    }

    return level == 0 ? levelArr.map((arr) => {
        console.log("avg: " + arr[0]/arr[1]);
        return arr[0]/arr[1]
    }) : levelArr; 
}

var tree = new BST();
tree.insert(new BSTNode(7));
tree.insert(new BSTNode(3));
tree.insert(new BSTNode(15));
tree.insert(new BSTNode(9));
tree.insert(new BSTNode(20));

console.log(avgLevelBST(tree.root));
 