// structure of each node

class Node {
    constructor(data) {
        this.data = data; // store data
        this.next = null; // initially, store as null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addFirst(data) {
        const node1 = new Node(data);
        node1.next = this.head;
        this.head = node1;
    }

    addLast(data) {
        const node1 = new Node(data);

        if (!this.head) {
            this.head = node1;
            return;
        }

        let lastNode = this.head;
        while (lastNode.next) {
            lastNode = lastNode.next;
        }

        lastNode.next = node1;
    }

    size() {
        let count = 0;
        let lastNode = this.head;
        while (lastNode) {
            count++;
            lastNode = lastNode.next;
        }

        return count;
    }

    addAt(data, index) {
        if (index < 0 || index > this.size()) {
            console.error("Invalid Index");
            return;
        }

        const node1 = new Node(data);

        if (index == 0) {
            node1.next = this.head;
            this.head = node1;
        }

        //traverse through list
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        node1.next = current.next;
        current.next = node1;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }

        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) return;

        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }

        current.next = null;
    }

    removeAt(index) {
        if (index < 0 || index > this.size()) {
            console.error("Invalid Index !!!");
            return;
        }

        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        if (current.next) current.next = current.next.next;
    }

    sort() {
        if (!this.head || !this.head.next) return;

        let swapped;
        do {
            let current = this.head;
            swapped = false;
            let prev = null;
            while (current && current.next) {
                if (current.data > current.next.data) {
                    let nextNode = current.next;
                    current.next = nextNode.next;
                    nextNode.next = current;

                    if (prev) {
                        prev.next = nextNode;
                    } else {
                        this.head = nextNode;
                    }

                    swapped = true;
                    prev = nextNode;
                } else {
                    prev = current;
                    current = current.next;
                }
            }
        } while (swapped);
    }

    search(input) {
        let current = this.head;
        let position = 0;
        while (current) {
            if (current.data == input) {
                return position;
            }
            current = current.next;
            position++;
        }

        return "No data found";
    }

    print() {
        let current = this.head;
        let linkData = [];
        while (current) {
            linkData.push(current.data);
            current = current.next;
        }

        console.log("Linked List : ", linkData.join(" > "));
    }

    reverse() {
        let current = this.head;
        let prev = null;
        while (current) {
            let nextNode = current.next;
            current.next = prev;
            prev = current;
            current = nextNode;
        }

        this.head = prev;

        let rev = [];
        let curr = this.head;
        while (curr) {
            rev.push(curr.data);
            curr = curr.next;
        }

        console.log("Reversed Linked List : ", rev.join(" > "));
    }

    sort() {
        let sortedArray = [];
        let current = this.head;
        while (current) {
            sortedArray.push(current.data);
            current = current.next;
        }

        sortedArray.sort((a, b) => a - b);

        const dummyNode = new Node(0);
        current = dummyNode;
        for (let i = 0; i < sortedArray.length; i++) {
            current.next = new Node(sortedArray[i]);
            current = current.next;
        }
        this.head = dummyNode.next;

        let SortedList = [];
        current = this.head;
        while (current) {
            SortedList.push(current.data);
            current = current.next;
        }

        console.log("Sorted Linked List : ", SortedList.join(" > "));
    }

    combineSort(otherList) {
        if (!this.head) {
            this.head = otherList.head;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }

        current.next = otherList.head;

        current = this.head;
        let combinedData = [];
        while (current) {
            combinedData.push(current.data);

            current = current.next;
        }

        combinedData.sort((a, b) => a - b);

        current = this.head;
        let index = 0;
        while (current) {
            current.data = combinedData[index];
            index++;
            current = current.next;
        }

        current = this.head;
        let combinedAndSorted = [];
        while (current) {
            combinedAndSorted.push(current.data);
            current = current.next;
        }

        console.log("Combined and sorted list : ", combinedAndSorted.join(" > "));
    }
}

const link = new LinkedList();
const link2 = new LinkedList();

link.addFirst(20);
link.addFirst(50);
link.addFirst(40);
link.addFirst(10);
link.addFirst(30);

link.addLast(80);
link.addLast(70);
link.addLast(90);
link.addLast(60);

// link.removeFirst();
// link.removeLast();
// link.removeAt(1);

link.print();

link.sort();

// link.reverse()

console.log("\nSize of the Linked List : ", link.size());

// link2.addFirst(600)
// link2.addLast(100);
// link2.addLast(400);
// link2.addLast(200);
// link2.addLast(500);
// link2.addLast(300);

// link2.print();

// link.combineSort(link2);

// link.sort();
