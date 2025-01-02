class Queue {
    constructor() {
        this.stack = [];
        this.temp = [];
    }

    enqueue(element) {
        this.stack.push(element);
    }

    dequeue() {
        if (this.isEmpty()) return "Empty";
        while (this.stack.length !== 0) {
            this.temp.push(this.stack.pop());
        }
        let removed = this.temp.shift();
        while (this.temp.length !== 0) {
            this.stack.push(this.temp.pop());
        }
        console.log("Removed : ", removed);
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    front() {
        if (this.isEmpty()) return "Empty";
        console.log('Front : ',this.stack[0]);
    }

    rear() {
        if (this.isEmpty()) return "Empty";
        console.log('Rear : ',this.stack[this.stack.length - 1]);
        return ;
    }

    print() {
        console.log(this.stack);
    }
}

const stack = new Queue();

stack.enqueue(10);
stack.enqueue(20);
stack.enqueue(30);
stack.enqueue(40);
stack.enqueue(50);

stack.print();

stack.dequeue();

stack.print();

stack.front()

stack.rear()

stack.enqueue(60)

stack.print();

stack.dequeue()

stack.print();



console.log(stack.isEmpty());
