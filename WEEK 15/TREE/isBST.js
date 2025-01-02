class TreeNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const node = new TreeNode(value);
        if (!this.root) {
            this.root = node;
        } else {
            this._insertNode(this.root, node);
        }
    }

    _insertNode(node, newNode) {
        if (node.val > newNode.val) {
            if (node.left) {
                this._insertNode(node.left, newNode);
            } else {
                node.left = newNode;
            }
        } else if (node.val < newNode.val) {
            if (node.right) {
                this._insertNode(node.right, newNode);
            } else {
                node.right = newNode;
            }
        } else {
            console.log('Value already exists')
        }
    }

    isBST(node = this.root, min = -Infinity, max = Infinity) {
        if (!node) return true;
        if (node.val <= min || node.val >= max) return false;
        return (
            this.isBST(node.left, min, node.val) &&
            this.isBST(node.right, node.val, max)
        )
    }
}

const bst = new BinaryTree();

// Insert values into the BST
bst.insert(90);
bst.insert(30);
bst.insert(70);
bst.insert(10);
bst.insert(20);
bst.insert(50);
bst.insert(40);

console.log("Question : Is the tree a BST? \nAnswer   :", bst.isBST()); // Output: true