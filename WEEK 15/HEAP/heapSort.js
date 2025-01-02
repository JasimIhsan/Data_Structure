class Heap {
    constructor() {
        this.heap = [];
    }

    heapify(arr) {
        this.heap = [...arr];
        let startIdx = Math.floor(this.heap.length / 2) - 1;
        for (let i = startIdx; i >= 0; i--) {
            this.heapifyDown(i, this.heap.length)
        }
    }

    heapifyDown(index, length) {
        let leftIdx = 2 * index + 1;
        let rightIdx = 2 * index + 2;
        let greatest = index;

        if (leftIdx < length && this.heap[leftIdx] < this.heap[greatest]) {
            greatest = leftIdx;
        }
        if (rightIdx < length && this.heap[rightIdx] < this.heap[greatest]) {
            greatest = rightIdx;
        }

        if (index !== greatest) {
            [this.heap[index], this.heap[greatest]] = [this.heap[greatest], this.heap[index]];
            this.heapifyDown(greatest, length);
        }
    }

    heapSort(arr) {
        this.heapify(arr)

        for (let i = this.heap.length - 1; i > 0; i--) {
            [this.heap[0], this.heap[i]] = [this.heap[i], this.heap[0]];
            this.heapifyDown(0, i);
        }

        return this.heap;
    }
}

const heap = new Heap();
const arr = [10, 30, 40, 90, 20, 50, 70];
console.log("Original Array:", arr);

const sortedArray = heap.heapSort(arr);
console.log("Sorted Array:", sortedArray);