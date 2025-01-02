class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinoryTree {
    constructor() {
        this.root = null;
        this.arr = []
    }

    insert(value) {
        const node = new TreeNode(value);

        if (!this.root) {
            this.root = node;
            return;
        }

        const queue = [this.root];
        while (queue.length) {
            let current = queue.shift();
            console.log('Current : ', current)
            if (!current.left) {
                current.left = node;
                return;
            } else {
                queue.push(current.left);
            }

            if (!current.right) {
                current.right = node;
                return;
            } else {
                queue.push(current.right)
            }
        }
    }

    search(value) {
        if (!this.root) {
            console.error('Empty Tree')
            return;
        }

        const queue = [this.root];
        while (queue.length) {
            let current = queue.shift();
            // console.log(current)
            if (current.data === value) {
                console.log('Value found : ', value);
                return true;
            }

            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right)
        }

        console.log('Value not Found');
        return false;
    }


    display(node, prefix = "", isLeft = true) {
        if (node) {
            // Print the right subtree first (indented)
            this.display(node.right, prefix + (isLeft ? "│   " : "    "), false);

            // Print the current node
            console.log(prefix + (isLeft ? "└── " : "┌── ") + node.data);

            // Print the left subtree
            this.display(node.left, prefix + (isLeft ? "    " : "│   "), true);
        }
    }

    // ------------------------------------------------------------------------------------------------------------ //
    // ---------------------------------------------- traversals -------------------------------------------------- //
    // ------------------------------------------------------------------------------------------------------------ //

    //Inorder (Left, Root , Right)
    inorder(node = this.root, arr = []) {
        if (node !== null) {
            this.inorder(node.left, arr);
            arr.push(node.data)
            this.inorder(node.right, arr)
        }
        return arr
    }

    //Preorder (Root , left , Right)
    preorder(node = this.root, arr = []) {
        if (node !== null) {
            arr.push(node.data)
            this.preorder(node.left, arr);
            this.preorder(node.right, arr)
        }
        return arr;
    }

    //Postorder (Left, Right, Root)
    postorder(node = this.root, arr = []) {
        if (node !== null) {
            this.postorder(node.left, arr);
            this.postorder(node.right, arr);
            arr.push(node.data);
        }
        return arr;
    }

    delete(value) {
        if (!this.root) return;

        let queue = [this.root];
        let nodeToDelete = null;
        let lastNode = null;

        while (queue.length) {
            lastNode = queue.shift();
            if (lastNode.data === value) nodeToDelete = lastNode;

            if (lastNode.left) queue.push(lastNode.left);
            if (lastNode.right) queue.push(lastNode.right);
        }

        if (nodeToDelete) {
            nodeToDelete.data = lastNode.data;
            this._deleteLastNode(lastNode);
        }
    }

    _deleteLastNode(lastNode) {
        const queue = [this.root];
        while (queue.length) {
            const current = queue.shift();

            if (current.left === lastNode) {
                current.left = null;
                return;
            } else if (current.left) {
                queue.push(current.left)
            }

            if (current.right === lastNode) {
                current.right = null;
                return;
            } else if (current.right) {
                queue.push(current.right)
            }
        }
    }

}

const myTree = new BinoryTree();

// myTree.insert('Root')
// myTree.insert('Child 1.0')
// myTree.insert('Child 2.0')
//
// myTree.insert('Child 1.1')
// myTree.insert('Child 1.2')
//
// myTree.insert('Child 2.1')
// myTree.insert('Child 2.2')
//
// myTree.insert('Child 1.1.1')
// myTree.insert('Child 1.1.2')
//
// myTree.insert('Child 1.2.1')
// myTree.insert('Child 1.2.2')

myTree.insert('Root')
myTree.insert(10)
myTree.insert(20)
//
myTree.insert(30)
myTree.insert(40)

myTree.insert(50)
myTree.insert(60)

myTree.insert(70)
myTree.insert(80)

myTree.insert(90)
myTree.insert(100)
// myTree.insert(110)
myTree.display(myTree.root)

// myTree.search(100)
//
// console.log('\n\n---------------- Inorder --------------- \n')
// console.log(myTree.inorder())
//
// console.log('\n\n---------------- Preorder --------------- \n')
// console.log(myTree.preorder())
//
// console.log('\n\n---------------- Postorder --------------- \n')
// console.log(myTree.postorder())
console.log('-----------------------------------------------------')

myTree.delete(40)

myTree.display(myTree.root)
