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
        const queue = [0]
        let head = 0
        while (head < queue.length) {
            const size = queue.length - head
            for (let index = 0; index < size; index++) {
                const node = queue[head++]
                visited.add(node)
                for (const neighbor of graph[node]) {
                    if (visited.has(neighbor)) continue
                    queue.push(neighbor)
                }
            }
        }

        return visited.size === n

    }
}
