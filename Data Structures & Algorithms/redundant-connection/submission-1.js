class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const n = edges.length
        const parents = Array.from({ length: n + 1 }, (_, i) => i)
        const heights = Array.from({ length: n + 1 }, () => 1)
        const find = (x) => {
            if (x !== parents[x]) {
                parents[x] = find(parents[x])
            }

            return parents[x]
        }
        const union = (a, b) => {
            const ap = find(a)
            const bp = find(b)
            if (ap === bp) return false
            if (heights[ap] < bp[heights]) {
                parents[ap] = parents[bp]
            } else if (heights[ap] > bp[heights]) {
                parents[bp] = parents[ap]
            } else {
                parents[bp] = parents[ap]
                heights[ap]++
            }
            return true
        }

        for (const [a, b] of edges) {
            if (!union(a, b)) return [a, b]
        }
    }
}
