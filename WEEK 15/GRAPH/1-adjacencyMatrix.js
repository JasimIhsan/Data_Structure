class Graph {
    constructor(size) {
        this.matrix = [];
        for (let i = 0; i < size; i++) {
            this.matrix.push(new Array(size).fill(0));
        }
    }

    addEdge(from, to) {
        this.matrix[from - 1][to - 1] = 1;
        this.matrix[to - 1][from - 1] = 1;
    }

    removeEdge(from, to) {
        this.matrix[from - 1][to - 1] = 0;
        this.matrix[to - 1][from - 1] = 0;
    }

    isEdge(from, to) {
        return this.matrix[from - 1][to - 1] === 1;
    }
}

let graph = new Graph(5);

graph.addEdge(1, 2);
graph.addEdge(1, 4);
graph.addEdge(2, 4);
graph.addEdge(2, 3);
graph.addEdge(4, 3);
graph.addEdge(4, 5);
graph.addEdge(5, 3);

console.log("Adjacency Matrix after adding edges:");
console.log(graph.matrix);
//
// console.log(graph.isEdge(3, 2))
// console.log(graph.isEdge(3, 1))
// graph.removeEdge(3, 2)
// console.log(graph.isEdge(3, 2))
// console.log(graph.matrix);