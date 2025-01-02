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

function dfs(graph, node, visited = new Set(), result = []) {
    if (!visited.has(node)) {
        visited.add(node);
        result.push(node);
        for (const neighbor of graph[node]) {
            dfs(graph, neighbor, visited, result)
        }
    }
    return result;
}

const dfsResult = dfs(graph, 1);
console.log(dfsResult); // Output: [1, 2, 3, 5, 4]


function dfsI(graph, start) {
    const visited = new Set();
    const stack = [start];
    const result = [];

    while (stack.length > 0) {
        const node = stack.pop();
        if (!visited.has(node)) {
            visited.add(node);
            result.push(node);

            for (const neighbor of graph[node]) {
                if (!visited.has(neighbor)) {
                    stack.push(neighbor)
                }
            }
        }
    }
    return result;
}