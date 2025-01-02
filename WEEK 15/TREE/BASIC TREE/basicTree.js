class TreeNode {
    constructor(data) {
        this.data = data; // value of node
        this.children = []; // holds the reference to the children
    }
}

class BasicTree {
    constructor() {
        this.root = null;
    }

    addRoot(data) {
        if (this.root) {
            console.error('Root Exist')
            return;
        }
        this.root = new TreeNode(data)
    };

    addChild(parentData, data) {
        const node = new TreeNode(data);

        if (!this.root) {
            this.addRoot(parentData);
            return;
        }
        const parent = this.search(this.root, parentData)
        if (parent) {
            parent.children.push(node)
        }
    }

    remove(data) {
        if (!this.root) {
            console.error('Tree is Empty');
            return;
        }

        if (this.root === data) {
            this.root = null
            console.log("The root node and its subtree have been removed.");
            return;
        }

        const remove = this.removeNode(this.root, data);
    }

    search(node, key) {
        if (node === null) return null;
        if (node.data === key) return node;

        for (let child of node.children) {
            const found = this.search(child, key);
            if (found) return found;
        }

        return null;
    }

    display(node = this.root, prefix = '', isLast = true) {
        if (!node) return;

        console.log(prefix + (isLast ? '└── ' : '├── ') + node.data);

        const newPrefix = prefix + (isLast ? '    ' : '│   ');

        for (let i = 0; i < node.children.length; i++) {
            const isChildLast = i === node.children.length - 1;
            this.display(node.children[i], newPrefix, isChildLast);
        }
    }

    // display(node = this.root, level = 0) {
    //     if (!node) return;
    //     console.log(' '.repeat(level * 4) + node.data);
    //     for (let child of node.children) {
    //         this.display(child, level + 1)
    //     }
    // }
}

const myTree = new BasicTree();

// myTree.addChild('Root')
myTree.addRoot('Root')
myTree.addChild('Root', 'Child 1')
myTree.addChild('Root', 'Child 2')

myTree.addChild('Child 1', 'GrandChild 1.1')
myTree.addChild('Child 1', 'GrandChild 1.2')

myTree.addChild('Child 2', 'GrandChild 2.1')
myTree.addChild('Child 2', 'GrandChild 2.2')


myTree.display()
