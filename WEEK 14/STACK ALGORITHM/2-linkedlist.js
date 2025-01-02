class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(data) {
        const node = new Node(data);
        node.next = this.top;
        this.top = node;
        this.size++;
    }

    pop() {
        if (this.isEmpty()) {
            console.log("Error popping : Stack is Empty");
            return null;
        }
        const removedNode = this.top;
        this.top = this.top.next;
        this.size--;
        console.log("Popped value : ", removedNode.data);
    }

    top() {
        if (this.isEmpty()) {
            console.log("Error : Stack is Empty");
            return null;
        }
        console.log("The top element is : ", this.top.data);
    }

    isEmpty() {
        return this.size === 0;
    }

    print() {
        if (this.isEmpty()) {
            console.log("Error printing : Stack is Empty");
            return;
        }

        let current = this.top;
        console.log(`|    |`);
        while (current) {
            console.log("| " + current.data + " |");
            console.log(current.next === null ? `——————`	 : '|----|')
            current = current.next;
        }
    }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);

stack.print();



