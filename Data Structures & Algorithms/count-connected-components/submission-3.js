class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const parents = Array.from({ length: n }, (_, i) => i)
        const rank = Array.from({ length: n }, () => 1)
        const find = (x) => {
            if (parents[x] !== x) {
                parents[x] = find(parents[x])
            }
            return parents[x]
        }
        const union = (a, b) => {
            const ap = find(a)
            const bp = find(b)
            if (ap === bp) return false
            if (rank[ap] > rank[bp]) {
                parents[bp] = ap
            } else if (rank[ap] < rank[bp]) {
                parents[ap] = bp
            } else {
                parents[bp] = ap
                rank[ap]++
            }
            return true

        }

        let count = n
        for (const [a, b] of edges) {
            if (union(a, b)) {
                count--

            }
        }

        return count
    }
}
