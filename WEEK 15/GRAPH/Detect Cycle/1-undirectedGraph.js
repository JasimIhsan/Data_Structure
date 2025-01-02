function isCycle(graph) {
    const visited = new Set();

    function dfs(node, parent) {
        visited.add(node);

        for (const neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                if (dfs(neighbor, node)) return true;
            } else if (neighbor !== parent) {
                return false;
            }
        }

        return false;
    }

    for (const node in graph) {
        if (!visited.has(node)) {
            if (dfs(node, null)) return true;
        }
    }

    return false; // No cycle found;
}

const undirectedGraph = {
    1: [2, 3],
    2: [1, 4],
    3: [1, 4],
    4: [2, 3]
};

console.log(isCycle(undirectedGraph)); // Output: true