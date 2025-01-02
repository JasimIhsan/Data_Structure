class MinHeap {
    constructor() {
        this.heap = []
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor(index / 2);
            if (this.heap[index] >= this.heap[parentIndex]) break;
            let temp = this.heap[index]
            this.heap[index] = this.heap[parentIndex];
            this.heap[parentIndex] = temp
            index = parentIndex;
        }
    }

    // remove
    extractMin() {
        if (this.heap.length === 0) return null
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }

    bubbleDown() {
        let index = 0;
        const length = this.heap.length;

        while (true) {
            let leftChild = 2 * index + 1;
            let rightChild = 2 * index + 2;
            let smallest = index;

            if (leftChild < length && this.heap[leftChild] < this.heap[smallest]) {
                smallest = leftChild;
            }
            if (rightChild < length && this.heap[rightChild] < this.heap[smallest]) {
                smallest = rightChild;
            }

            // console.log(`Smallest element index: ${smallest}, value: ${this.heap[smallest]}`);

            if (smallest === index) break; // heap property satisfied;
            let temp = this.heap[smallest];
            this.heap[smallest] = this.heap[index];
            this.heap[index] = temp;
        }
    }

    peek() {
        return this.heap[0] || null;
    }

    // Build a heap from an unsorted Array
    heapify(arr) {
        this.heap = arr;
        const startIdx = Math.floor(this.heap.length / 2) - 1;
        for (let i = startIdx; i >= 0; i--) {
            this.sinkDown(i);
        }
    }

    sinkDown(index) {
        let smallest = index;
        let left = 2 * index + 1;
        let right = 2 * index + 2;

        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }
        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }

        if (smallest !== index) {
            let temp = this.heap[smallest];
            this.heap[smallest] = this.heap[index]
            this.heap[index] = temp;
            this.sinkDown(smallest)
        }
    }

    heapSort(arr) {
        this.heapify(arr); // Build the heap

        const sortedArray = [];
        while (this.heap.length > 0) {
            sortedArray.push(this.extractMin());
        }
        return sortedArray;
    }
}

const heap = new MinHeap();

// Insertion
heap.insert(10);
heap.insert(5);
heap.insert(20);
heap.insert(2);
// console.log("Heap after insertion:", heap.heap);

// Peek
// console.log("Peek (Min Element):", heap.peek()); // Output: 2

// // Extract Min
// console.log("Extract Min:", heap.extractMin()); // Output: 2
// console.log("Heap after extraction:", heap.heap);

// Heapify
const array = [10, 5, 1, 3];
// heap.heapify(array);

console.log('sort : ', heap.heapSort(array))
// console.log("Heapified Array:", heap.heap);,