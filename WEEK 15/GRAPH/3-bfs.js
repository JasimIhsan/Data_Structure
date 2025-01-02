// 1 -- 2 -- 3
// |    |
// 4 -- 5

const graph = {
    1: [2, 4],
    2: [1, 3, 5],
    3: [2],
    4: [1, 5],
    5: [2, 4]
};

function bfs(graph, start) {
    const visited = new Set();
    const queue = [start];
    const result = [];

    while (queue.length > 0) {
        const node = queue.shift();

        if (!visited.has(node)) {
            visited.add(node);
            result.push(node);

            for (const neighbor of graph[node]) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
                }
            }
        }
    }
    return result;
}

// Example Usage
const result = bfs(graph, 1);
console.log(result); // Output: [1, 2, 4, 3, 5]