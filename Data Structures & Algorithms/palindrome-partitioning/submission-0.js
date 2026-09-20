class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const result = []
        const path = []

        const isPalindrom = (s) => {
            if (!s) return false
            let left = 0
            let right = s.length - 1
            while (left <= right) {
                if (s[left] !== s[right]) return false
                left++
                right--
            }
            return true
        }
        const dfs = (start) => {
            if (start === s.length) {
                result.push([...path])
                return
            }

            for (let end = start + 1; end <= s.length; end++) {
                const substr = s.substring(start, end)
                if (!isPalindrom(substr)) continue
                path.push(substr)
                dfs(end)
                path.pop()
            }
        }

        dfs(0)

        return result

    }
}
