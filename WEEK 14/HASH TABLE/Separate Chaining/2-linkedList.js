class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(key, value) {
        if (!this.head) {
            const node = new Node(key, value);
            this.head = node;
            return;
        }
        let current = this.head;

        while (current) {
            if (current.key === key) {
                current.value = value;
                return;
            }
            current = current.next;
        }

        current = this.head;

        while (current) {
            const node = new Node(key, value);
            if (current.next == null) {
                current.next = node;
                return;
            }
            current = current.next;
        }
    }

    find(key) {
        let current = this.head;
        while (current) {
            if (current.key === key) {
                return current.value;
            }
            current = current.next;
        }
        return null;
    }

    remove(key) {
        let current = this.head;
        let prev = null;
        while (current) {
            if (current.key === key) {
            

                if (prev) {
                    prev.next = current.next;
                } else {
                    this.head = current.next;
                }
                return true;
            }
            prev = current;
            current = current.next;
        }
        return false;
    }

    display() {
        let current = this.head;
        let arr = [];
        while (current) {
            arr.push(`[${current.key} : ${current.value}]`);
            current = current.next;
        }
        return arr.length !== 0 ? arr.join(" >> ") : null;
    }
}

class HashTable {
    constructor(size) {
        this.table = new Array(size).fill(null).map(() => new LinkedList());
        this.size = size;
    }

    hash(key) {
        let total = 0;
        let str = key.toString();
        for (let i = 0; i < str.length; i++) {
            total += str.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key, value) {
        const index = this.hash(key);
        this.table[index].add(key, value);
    }

    get(key){
        const index = this.hash(key)
        return this.table[index].find(key);
    }

    remove(key){
        const index = this.hash(key);
        return this.table[index].remove(key)
    }

    print() {
        for (let i = 0; i < this.size; i++) {
            if (this.table[i] !== null) {
                console.log(i, " >> ", this.table[i].display());
            } else {
                console.log(i, " >> ", null);
            }
        }
    }
}

const table = new HashTable(5);

table.set("name", "Jasim");
table.set("age", 23);
table.set("place", "Kalikavu");
table.set("father", "Salahudheen");
table.set("mother", "Rohiya mol");

console.log("\n------------------- Table Contents: ------------------\n");
table.print();

console.log("\n------------------- get methods: ------------------\n");


console.log("Get 'name':", table.get("name")); // Output: Jasim
console.log("Get 'place':", table.get("place")); // Output: Kalikavu


console.log("\n------------------- remove methods: ------------------\n");

table.remove("age");
table.remove("place");
console.log("After Removing 'age & place':\n");
table.print();

