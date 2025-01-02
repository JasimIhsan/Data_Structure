class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(element) {
        this.queue.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            console.error("No one is there...");
            return;
        }

        let removed = this.queue.shift();
        console.log("\nRemoved element is : ", removed);
    }

    front(){
        if(this.isEmpty()){
            console.error("No one is there...");
            return;
        }

        console.log('\nFirst element is : ', this.queue[0]);
        
    }

    isFull(){

    }

    isEmpty() {
        return this.queue.length === 0;
    }

    print(){
        if(this.isEmpty()){
            console.error("No one is there...");
            return;
        }
        console.log('\nThe Queue : ', this.queue.join(' << '));
        
    }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.front()
queue.dequeue()
queue.front()

queue.print()

let nums = [1,2,3,4,5,6]
