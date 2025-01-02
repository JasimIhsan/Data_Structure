class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
    }

    addFirst(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            node.next = this.head;
            return;
        }

        let tail = this.head;
        while (tail.next !== this.head) {
            tail = tail.next;
        }

        node.next = this.head;
        this.head = node;
        tail.next = this.head;
    }

    addLast(data) {
        const node = new Node(data);

        if (!this.head) {
            node.next = this.head = node ;
            return;
        }

        let current = this.head;
        while (current.next !== this.head) {
            current = current.next;
        }

        current.next = node;
        node.next = this.head;
    }

    addAt(data, position) {
        let index = position - 1;
        if (index < 0 || index > this.size()) {
            console.error("Invalid position");
            return;
        }
        const node = new Node(data);

        if (index == 0) {
            // this.addAt(data);

            let tail = this.head;
            while (tail.next !== this.head) {
                tail = tail.next;
            }

            node.next = this.head;
            this.head = node;
            tail.next = this.head;
        }

        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        node.next = current.next;
        current.next = node;
    }

    removeFirst() {
        if (!this.head) return;

        let tail = this.head;
        while (tail.next !== this.head) {
            tail = tail.next;
        }

        this.head = this.head.next;
        tail.next = this.head;
    }

    removeLast() {
        if (!this.head) return;

        let tail = this.head;
        let prev = null;
        while (tail.next !== this.head) {
            prev = tail;
            tail = tail.next;
        }

        if (!prev) {
            this.head = null;
        } else {
            prev.next = this.head;
        }
    }

    removeAt(position) {
        let index = position - 1;
        if (index < 0 || index > this.size()) {
            console.error("Invalid position");
            return;
        }

        if (index == 0) {
            this.removeFirst();
        }

        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        current.next = current.next.next;
    }

    reverse() {
        if (!this.head) return;
        let current = this.head;
        let prev = null;
        let nextNode = null;

        do {
            nextNode = current.next;
            current.next = prev;
            prev = current;
            current = nextNode;
        } while (current !== this.head);

        this.head.next = prev;
        this.head = prev;

        console.log("Reveresed : ");

        this.print();
    }

    size() {
        let current = this.head;
        let size = 0;
        do {
            size++;
            current = current.next;
        } while (current !== this.head);
        return size;
    }
    
    print() {
        if (!this.head) {
            console.log("Linked List is empty");
            return;
        }

        let current = this.head;
        let listData = [];
        do {
            listData.push(current.data);
            current = current.next;
        } while (current !== this.head);

        console.log("Circular Linked List : ", listData.join(" > "));
    }
}

const link = new CircularLinkedList();

link.addLast(50);
link.addLast(40);
link.addLast(30);
link.addLast(20);
link.addLast(10);


// link.addAt(60, 3)

// link.removeFirst();
// link.removeLast()

link.print();

link.reverse();

console.log("Size of the Circular Linked List : ", link.size());
