class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const node = new TreeNode(value);
        if (!this.root) {
            this.root = node
        } else {
            this._insertNode(this.root, node);
        }
    }

    _insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode
            } else {
                this._insertNode(node.left, newNode)
            }
        } else if (node.value < newNode.value) {
            if (node.right === null) {
                node.right = newNode
            } else {
                this._insertNode(node.right, newNode)
            }
        } else {
            console.log('Value already Exists')
        }
    }

    inOrder(node = this.root, result = []) {
        if (node !== null) {
            this.inOrder(node.left, result);
            result.push(node.value);
            this.inOrder(node.right, result);
        }
        return result;
    }

    preOrder(node = this.root, result = []) {
        if (node !== null) {
            result.push(node.value);
            this.preOrder(node.left, result);
            this.preOrder(node.right, result);
        }
        return result;
    }

    postOrder(node = this.root, result = []) {
        if (node !== null) {
            this.postOrder(node.left, result);
            this.postOrder(node.right, result);
            result.push(node.value);
        }
        return result;
    }
}

const bst = new BST();

bst.insert(1)
bst.insert(2)
bst.insert(3)
bst.insert(4)
bst.insert(5)

// console.log(bst.root)
console.log('Inorder   : ', bst.inOrder());
console.log('PreOrder  : ', bst.preOrder());
console.log('PostOrder : ', bst.postOrder())