class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const parents = Array.from({ length: n }, (_, i) => i)
        const find = (x) => {
            while (parents[x] !== x) {
                x = parents[x]
            }
            return x
        }
        const union = (a, b) => {
            const ap = find(a)
            const bp = find(b)
            if (ap === bp) return false
            parents[bp] = ap
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
