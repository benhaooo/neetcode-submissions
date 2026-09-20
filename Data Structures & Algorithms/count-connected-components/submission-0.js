class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const graph = Array.from({ length: n }, () => [])
        for (const [a, b] of edges) {
            graph[a].push(b)
            graph[b].push(a)
        }
        let result = 0
        const visited = new Set()
        for (let index = 0; index < n; index++) {
            if (visited.has(index)) continue
            result++
            const stack = [index]
            while (stack.length) {
                const node = stack.pop()
                visited.add(node)
                for (const neighbor of graph[node]) {
                    if (visited.has(neighbor)) continue
                    stack.push(neighbor)
                }
            }
        }

        return result
    }
}
