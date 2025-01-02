export class Stack {
    constructor() {
        this.stack = [];
    }

    push(element) {
        this.stack.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return "Stack is Empty. Can't perform pop !!!";
        }
        return this.stack.pop();
    }

    top() {
        if (this.isEmpty()) {
            return "Stack is Empty. Can't perform top !!!";
        }
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    size() {
        return this.stack.length;
    }

    print() {
        if (this.isEmpty()) {
            return "Stack is Empty. Can't Print.";
        }

        for (let i = this.stack.length - 1; i >= 0; i--) {
            console.log("| " + this.stack[i] + " |");
            console.log("|----|");
        }
        console.log("|____|");
    }
}

// const stack = new Stack();

// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.push(40);
// stack.push(50);

// // console.log("The removed element : ", stack.pop());
// // console.log("The removed element : ", stack.pop());

// stack.print();

// console.log("The top Element of the stack : ", stack.top());
