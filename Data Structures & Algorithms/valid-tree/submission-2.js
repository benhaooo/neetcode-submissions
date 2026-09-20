class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (edges.length !== n - 1) return false;
        const graph = Array.from({ length: n }, () => [])


        for (const [a, b] of edges) {
            graph[a].push(b)
            graph[b].push(a)
        }

        const visited = new Set()
        const stack = [0]
        while (stack.length) {
            const node = stack.pop()
            visited.add(node)
            for (const neighbor of graph[node]) {
                if (visited.has(neighbor)) continue
                stack.push(neighbor)
            }
        }
        return visited.size === n

    }
}
