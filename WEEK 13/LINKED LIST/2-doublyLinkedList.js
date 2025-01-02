// Doubly Linked List in JavaScript

class Node {
    constructor(data) {
        this.prev = null;
        this.data = data;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
    }

    addFirst(data) {
        const node = new Node(data);

        node.next = this.head;

        if (this.head) {
            this.head.prev = node;
        }

        this.head = node;
    }

    addLast(data) {
        const node = new Node(data);

        if (!this.head) {
            this.head = node;
            return;
        }

        let current = this.head;
        while (current) {
            current = current.next;
        }

        node.prev = current;
        current.next = node;
    }

    addAt(data, index) {
        if (index < 0 || index > this.size()) {
            console.error("Invalid index !!!");
            return;
        }
        const node = new Node(data);

        if (index == 0) {
            node.next = this.head;
            if (this.head) {
                this.head.prev = node;
            }
            this.head = node;
        }

        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        node.next = current.next;
        node.prev = current.next.prev;
        current.next.prev = node;
        current.next = node;
    }

    removeFirst() {
        if (!this.head) return;

        this.head = this.head.next;
        this.head.prev = null;
    }

    removeLast() {
        if (!this.head) return;
        if (!this.head.next) {
            this.head = null;
            return;
        }

        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }
        current.next = null;
    }

    removeAt(position) {
        let index = position - 1;
        if (index < 0 || index > this.size()) {
            console.error("Invalid Index !!!");
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            if (this.head) this.head.prev == null;
        }

        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;

            if (current.next) {
                current.next.prev = current;
            }
        }
        console.log(`Node deleted from ${position} position`);
    }

    reverse() {
        let current = this.head;
        let temp = null;

        while (current) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;

            current = current.prev;
        }

        if (temp) {
            this.head = temp;
        }

        current = this.head;
        let revList = [];
        while (current) {
            revList.push(current.data);
            current = current.next;
        }

        console.log('Reversed Doubly Linked List : ', revList.join(' <> '));
    }

    size() {
        let current = this.head;
        let size = 0;
        while (current) {
            size++;
            current = current.next;
        }
        return size;
    }

    print() {
        let current = this.head;
        let linkData = [];
        while (current) {
            linkData.push(current.data);
            current = current.next;
        }

        console.log("Doubly Linked List : ", linkData.join(" <> "));
    }
}

const dLink = new DoublyLinkedList();

dLink.addFirst(60);
dLink.addFirst(50);
dLink.addFirst(40);
dLink.addFirst(30);
dLink.addFirst(20);
dLink.addFirst(10);

// dLink.addAt(100, 3);

// dLink.removeFirst();
// dLink.removeLast();
// dLink.removeAt(1);

dLink.print();
dLink.reverse();

dLink.print();

console.log("\nSize of the Doubly Linked List : ", dLink.size());
