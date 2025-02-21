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
			return;
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
			console.log("Value already exists");
		}
	}

	isBalanced(node = this.root) {
		return this.checkBalance(node).balanced;
	}

	checkBalance(node) {
		if (!node) return { height: 0, balanced: true };
		const left = this.checkBalance(node.left);
		const right = this.checkBalance(node.right);

		const balanced = left.balanced && right.balanced && Math.abs(left.height - right.height) <= 1;
		const height = Math.max(left.height, right.height) + 1;
		return { height, balanced };
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
// bst.insert(80);
// bst.insert(35);
console.log("Is the tree balanced?", bst.isBalanced()); // Output: true
