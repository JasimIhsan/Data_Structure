function isCycle(graph) {
    const visited = new Set(); // track all visited nodes
    const recStack = new Set(); // Tracks nodes in the current recursion stack

    function dfs(node) {
        if (recStack.has(node)) return true
        if (visited.has(node)) return false;

        visited.add(node);
        recStack.add(node);

        for (const neighbor of graph[node]) {
            if (dfs(neighbor)) return true;
        }

        recStack.delete(node)
        return false;
    }

    for (const node in graph) {
        if (!visited.has(node)) {
            if (dfs(node)) return true;
        }
    }

    return false;
}

const directedGraph = {
    A: ["B"],
    B: ["C"],
    C: ["A"]
};

console.log(isCycle(directedGraph)); // Output: true