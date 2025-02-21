class MaxHeap {
	constructor() {
		this.heap = [];
	}

	insert(value) {
		this.heap.push(value);
		this.bubbleUp();
	}

	bubbleUp() {
		let index = this.heap.length - 1;
		while (index > 0) {
			let parentIndex = Math.floor((index - 1) / 2);
			if (this.heap[index] < this.heap[parentIndex]) break;
			[this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
			index = parentIndex;
		}
	}

	extractMax() {
		if (this.heap.length === 0) return null;
		if (this.heap.length === 1) return this.heap.pop();

		let max = this.heap[0];
		this.heap[0] = this.heap.pop();
		this.bubbleDown();
		return max;
	}

	bubbleDown() {
		let index = 0;
		let length = this.heap.length;

		while (true) {
			let leftChild = 2 * index + 1;
			let rightChild = 2 * index + 2;
			let greatest = index;

			if (index < length && this.heap[leftChild] > this.heap[greatest]) {
				greatest = leftChild;
			}
			if (index < length && this.heap[rightChild] > this.heap[greatest]) {
				greatest = rightChild;
			}

			if (index === greatest) break;
			[this.heap[index], this.heap[greatest]] = [this.heap[greatest], this.heap[index]];
		}
	}

	peek() {
		return this.heap[0] || null;
	}

	heapify(arr) {
		this.heap = arr;
		let startIdx = Math.floor(this.heap.length / 2) - 1;
		for (let i = startIdx; i >= 0; i--) {
			this.heapifyDown(i);
		}
	}

	heapifyDown(index) {
		let length = this.heap.length;
		let left = 2 * index + 1;
		let right = 2 * index + 2;
		let greatest = index;

		if (left < length && this.heap[left] > this.heap[greatest]) {
			greatest = left;
		}
		if (right < length && this.heap[right] > this.heap[greatest]) {
			greatest = right;
		}

		if (index !== greatest) {
			[this.heap[index], this.heap[greatest]] = [this.heap[greatest], this.heap[index]];
			this.heapifyDown(greatest);
		}
	}

	heapSort(arr) {
		this.heapify(arr);

		const sortedArray = [];
		while (this.heap.length > 0) {
			sortedArray.push(this.extractMax());
		}
		console.log("Sorted : ", sortedArray);
	}
}

const hp = new MaxHeap();

// Insertion
// hp.insert(10);
// hp.insert(5);
// hp.insert(20);
// hp.insert(2);

// console.log('Heap : ', hp.heap)
// console.log(hp.extractMax())
let arr = [10, 30, 40, 90, 20, 50, 70];
// hp.heapify(arr)
// console.log('Heap : ', hp.heap)
hp.heapSort(arr);
