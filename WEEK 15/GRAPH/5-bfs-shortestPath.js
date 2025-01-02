class Graph {
    constructor() {
        this.list = {};
    }

    addNode(node) {
        this.list[node] = [];
    }

    addEdge(from, to) {
        this.list[from].push(to);
        this.list[to].push(from);
    };

    bfsShortestPath(startNode, endNode) {
        if (startNode === endNode) return [startNode];

        let visited = new Set();
        let queue = [startNode];
        let parent = {};

        visited.add(startNode);
        parent[startNode] = null;

        while (queue.length > 0) {
            const current = queue.shift();

            for (const neighbour of this.list[current]) {
                if (!visited.has(neighbour)) {
                    visited.add(neighbour);
                    parent[neighbour] = current;
                    queue.push(neighbour)
                }

                if (neighbour === endNode) {
                    return this.recontructPath(parent, startNode, endNode)
                }
            }
        }
        return null;
    }

    recontructPath(parent, startNode, endNode) {
        let path = [];
        let current = endNode;
        while (current !== null) {
            path.push(current);
            current = parent[current];
        }
        return path.reverse()
    }

}

let graph = new Graph();
graph.addNode(0);
graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addNode(4);
graph.addNode(5);
graph.addNode(6);

graph.addEdge(0, 1);
graph.addEdge(0, 3);
graph.addEdge(1, 3);
graph.addEdge(1, 2);
graph.addEdge(1, 5);
graph.addEdge(1, 6);
graph.addEdge(3, 2);
graph.addEdge(3, 4);
graph.addEdge(4, 2);
graph.addEdge(4, 6);
graph.addEdge(5, 2);

console.log("Graph adjacency list:", graph.list);

const startNode = 0;
const endNode = 4;
const shortestPath = graph.bfsShortestPath(startNode, endNode);

console.log(`Shortest path from ${startNode} to ${endNode}:`, shortestPath);