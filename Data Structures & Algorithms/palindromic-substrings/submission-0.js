class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        const len = s.length
        let count = 0
        const expand = (start, end) => {
            while (start >= 0 && end < len && s[start] === s[end]) {
                count++
                start--
                end++
            }
        }

        for (let i = 0; i < len; i++) {
            expand(i, i)
            expand(i, i + 1)
        }

        return count
    }
}
