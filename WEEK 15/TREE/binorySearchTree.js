class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const node = new Node(value);
        if (!this.root) {
            this.root = node;
        } else {
            this._insertNode(this.root, node);
        }
    }

    _insertNode(node, newNode) {
        if (node.value > newNode.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this._insertNode(node.left, newNode);
            }
        } else if (node.value < newNode.value) {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this._insertNode(node.right, newNode);
            }
        } else {
            console.log(`Node with ${newNode.value} already exist\n`);
        }
    }


    remove(value) {
        return this._removeNode(this.root, value);
    }

    _removeNode(node, value) {
        if (node === null) return null;

        if (node.value > value) {
            node.left = this._removeNode(node.left, value);
        } else if (node.value < value) {
            node.right = this._removeNode(node.right, value);
        } else {
            //to remove leaf node
            if (node.left === null && node.right === null) return null;

            if (node.left === null) return node.right;
            if (node.right === null) return node.left;

            // const minRight = this._min(node.right);
            const minRight = this._min(node.right);
            node.value = minRight.value;

            node.right = this._removeNode(node.right, minRight.value);
        }
        // console.log('\nRemoved : ', node.value);
        return node;
    }

    // _findMinNode(node) {
    //     while (node.left !== null) {
    //         node = node.left;
    //     }
    //     return node;
    // }

    search(value) {
        return this._searchValue(this.root, value);
    }

    _searchValue(node, value) {
        if (node === null) return false;
        if (node.value === value) return true;

        if (node.value < value) {
            return this._searchValue(node.right, value);
        } else {
            return this._searchValue(node.left, value);
        }
    }

    // ---------------------- MIN & MAX--------------------------- //

    min() {
        return this._min(this.root)
    }

    _min(node) {
        if (!node.left) {
            return node.value;
        } else {
            return this._min(node.left);
        }
    }

    max() {
        return this._max(this.root)
    }

    _max(node) {
        if (!node.right) {
            return node.value
        } else {
            return this._max(node.right)
        }
    }

    // ---------------------- DFS traversal --------------------------- //

    // In-order traversal: Left -> Node -> Right
    inOrderTraversal() {
        const result = [];
        this._inOrder(this.root, result);
        return result;
    }

    _inOrder(node, result) {
        if (node !== null) {
            this._inOrder(node.left, result);
            result.push(node.value);
            this._inOrder(node.right, result);
        }
    }

    // Pre-order traversal: Node -> Left -> Right
    preOrderTraversal() {
        const result = [];
        this._preOrder(this.root, result);
        return result;
    }

    _preOrder(node, result) {
        if (node !== null) {
            result.push(node.value);
            this._preOrder(node.left, result);
            this._preOrder(node.right, result);
        }
    }

    // Post-order traversal: Left -> Right -> Node
    postOrderTraversal() {
        const result = [];
        this._postOrder(this.root, result);
        return result;
    }

    _postOrder(node, result) {
        if (node !== null) {
            this._postOrder(node.left, result);
            this._postOrder(node.right, result);
            result.push(node.value);
        }
    }

    // ---------------------- BFS traversal --------------------------- //

    bfs() {
        const queue = [];
        const arr = [];
        queue.push(this.root);
        while (queue.length) {
            let current = queue.shift();
            arr.push(current.value)
            if (current.left) {
                queue.push(current.left)
            }
            if (current.right) {
                queue.push(current.right)
            }
        }
        console.log('\nBFS Traversal : ', arr)
    }

    // ---------------------------------------------------------------- //

    display(node, prefix = "", isLeft = true) {
        if (node) {
            // Print the right subtree first (indented)
            this.display(node.right, prefix + (isLeft ? "│   " : "    "), false);

            // Print the current node
            console.log(prefix + (isLeft ? "└── " : "┌── ") + node.value);

            // Print the left subtree
            this.display(node.left, prefix + (isLeft ? "    " : "│   "), true);
        }
    }
}

const bst = new BinarySearchTree();

// Insert values into the BST
bst.insert(40);
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);
bst.insert(35);

bst.display(bst.root);
// bst.bfs()

// console.log('Max : ', bst.max());
// console.log('Min : ', bst.min());

// console.log("In-order Traversal:", bst.inOrderTraversal()); // [20, 30, 40, 50, 60, 70, 80]
// console.log("Pre-order Traversal:", bst.preOrderTraversal()); // [50, 30, 20, 40, 70, 60, 80]
// console.log("Post-order Traversal:", bst.postOrderTraversal()); // [20, 40, 30, 60, 80, 70, 50]

// // Search for a value
// console.log("\nSearch 60:", bst.search(60)); // true
// console.log("Search 25:", bst.search(25)); // false

// console.log("\nIn-order Traversal (Before Removal): \n", );
// Output: [20, 30, 40, 50, 60, 70, 80]
console.log("\nAfter removing : \n");

// Remove a leaf node (20)
bst.remove(20);


// Remove a node with one child (30)
console.log(bst.remove(30))

// Remove a node with two children (50)
bst.remove(50);
bst.display(bst.root)