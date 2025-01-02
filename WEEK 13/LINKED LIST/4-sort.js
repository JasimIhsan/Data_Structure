// function ListNode(data, next) {
//     this.data = data === undefined ? 0 : data;
//     this.next = next === undefined ? null : next;
// }

// function linkedListToArray(head) {
//     let arr = [];
//     let current = head;
//     while (current) {
//         arr.push(current.data);
//         current = current.next;
//     }
//     return arr;
// }

// function arrayToLinkedList(arr) {
//     let dummyHead = new NodeList(0);
//     let current = dummyHead;
//     for (let ele of arr) {
//         current.next = new ListNode(ele);
//         current = current.next;
//     }
//     return dummyHead.next;
// }

// function bubbleSort(arr) {
//     let swapped;
//     do {
//         swapped = false;
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 let temp = arr[i];
//                 arr[i] = arr[i + 1];
//                 arr[i + 1] = temp;
//                 swapped = true;
//             }
//         }
//     } while (swapped);

//     return arr;
// }

// function sortLinkedList(head){
//     let arr = linkedListToArray(head);
//     bubbleSort(arr);
//     return arrayToLinkedList(arr);
// }

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     // Add a node to the end
//     append(data) {
//         const newNode = new Node(data);
//         if (!this.head) {
//             this.head = newNode;
//             return;
//         }
//         let current = this.head;
//         while (current.next) {
//             current = current.next;
//         }
//         current.next = newNode;
//     }

//     // bubbleSort() {
//     //     if (!this.head || !this.head.next) return; // No sorting needed for empty or single-node lists

//     //     let swapped;
//     //     do {
//     //         swapped = false;
//     //         let prev = null; // Tracks the previous node
//     //         let current = this.head; // Start with the head

//     //         while (current && current.next) {
//     //             if (current.data > current.next.data) {
//     //                 // Swap nodes
//     //                 this.swapNodes(prev, current, current.next);
//     //                 swapped = true;

//     //                 // After swapping, the new "current" node is still in the same position
//     //                 if (prev === null) {
//     //                     // If head is involved in the swap
//     //                     prev = this.head;
//     //                 } else {
//     //                     prev = prev.next; // Move prev forward to the new position
//     //                 }
//     //             } else {
//     //                 // No swap, move prev and current forward
//     //                 prev = current;
//     //                 current = current.next;
//     //             }
//     //         }
//     //     } while (swapped);
//     // }

//     // swapNodes(prev, current, next) {
//     //     // Adjust the pointers to swap the nodes
//     //     if (prev) {
//     //         prev.next = next; // Link prev to the next node
//     //     } else {
//     //         this.head = next; // Update head if current is the first node
//     //     }

//     //     current.next = next.next; // Point current to the node after next
//     //     next.next = current; // Point next to current
//     // }

//     sort() {
//        if(!this.head || !this.head.next) return ;

//        let swapped ;
//        do {
//             let current = this.head;
//             swapped = false;
//             let prev = null;
//             while(current && current.next){
//                 if(current.data > current.next.data){
//                     let nextNode = current.next;
//                     current.next = nextNode.next;
//                     nextNode.next = current;

//                     if(prev){
//                         prev.next = nextNode;
//                     } else {
//                         this.head = nextNode;
//                     }

//                     swapped = true;
//                     prev = nextNode;
//                 } else {
//                     prev = current;
//                     current = current.next;
//                 }
//             }
//        } while (swapped);
//     }

//     // Display the list
//     display() {
//         let current = this.head;
//         while (current) {
//             process.stdout.write(current.data + " -> ");
//             current = current.next;
//         }
//         console.log("null");
//     }
// }

// // Example usage
// const list = new LinkedList();
// list.append(4);
// list.append(3);
// list.append(1);
// list.append(2);

// console.log("Before sorting:");
// list.display();

// list.sort();

// console.log("After sorting:");
// list.display();

class HashTable {
    constructor(size) {
        this.table = new Array(size).fill(null);
        this.size = size;
        this.keys = 0;
        this.loadFactorThreshold = 0.7;
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
        if (this.keys / this.size > this.loadFactorThreshold) {
            this.resize();
        }
        let index = this.hash(key);
        let startIndex = index;

        while (this.table[index] !== null) {
            if (this.table[index][0] === key) {
                this.table[index][1] = value;
                return;
            }

            index = (index + 1) % this.size;
            if (index === startIndex) {
                console.error("HashTable is full! Consider resizing.");
                break;
            }
        }
        this.keys++;
        this.table[index] = [key, value];
    }

    resize() {
        console.log("Resizing table...");
        const oldTable = this.table;
        this.size = this.size * 2;
        this.table = new Array(this.size).fill(null);
        this.keys = 0;
        for (let bucket of oldTable) {
            if (bucket !== null) {
                const [key, value] = bucket;
                this.set(key, value);
            }
        }
        console.log("Resize complete. New size:", this.size);
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i] !== null) {
                console.log(`${i} >> [ ${this.table[i].join(" : ")} ]`);
            }
        }
    }

}


const table = new HashTable(5);

table.set("name", "Jasim");
table.set("mane", "Footaball player");
table.set("amne", "Ihsan");
table.set("amne", "sahla");
table.set("age", 23);
table.set("place", "Kalikavu");
table.set("father", "Salahudheen");
table.set("mother", "Rohiya mol");

console.log("\n------------------- Table Contents: ------------------\n");
table.display();
