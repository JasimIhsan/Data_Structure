class Graph {
    constructor() {
        this.list = {};
    }

    addNode(node) {
        this.list[node] = [];
    }

    addEdge(from, to) {
        this.list[from].push(to);
        this.list[to].push(from)
    }

    removeEdge(from, to) {
        this.list[from] = this.list[from].filter((node) => node !== to);
        this.list[to] = this.list[to].filter((node) => node !== from);
    }

    isEdge(from, to) {
        return this.list[from].includes(to);
    }

    bfs(start) {
        const visited = new Set();
        const queue = [start];
        const result = [];

        while (queue.length > 0) {
            const node = queue.shift();
            if (!visited.has(node)) {
                visited.add(node);
                result.push(node);

                for (const neighbor of this.list[node]) {
                    if (!visited.has(neighbor)) {
                        queue.push(neighbor)
                    }
                }
            }
        }
        return result;
    }

    dfs(node, visited = new Set(), result = []) {
        if (!visited.has(node)) {
            visited.add(node);
            result.push(node);

            for (const neighbor of this.list[node]) {
                this.dfs(neighbor, visited, result);
            }
        }
        return result;
    }
}

let graph = new Graph();

graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addNode(4);
graph.addNode(5);

graph.addEdge(1, 2);
graph.addEdge(1, 4);
graph.addEdge(2, 4);
graph.addEdge(2, 3);
graph.addEdge(3, 4);
graph.addEdge(3, 5);
graph.addEdge(4, 5);

console.log(graph.isEdge(4, 5))

console.log(graph.list)

console.log('Breadth First Search : ', graph.bfs(1))
console.log('Depth First Search : ', graph.dfs(1))
// console.log(graph.list)