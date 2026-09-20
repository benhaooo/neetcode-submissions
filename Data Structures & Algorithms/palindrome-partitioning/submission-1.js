const ishuiwen = (s) => {
    return s === s.split('').reverse().join('')
}

/**
 * @param {string} s
 * @return {string[][]}
 */


class Solution {

    partition(s) {

        const result = []
        const path = []
        const dfs = (start, end) => {

            const substr = s.slice(start, end)
            if (!ishuiwen(substr)) return
            path.push(substr)
            if (end === s.length) {
                result.push([...path])
                path.pop();
                return
            }
            for (let i = end + 1; i <= s.length; i++) {
                const res = dfs(end, i)
            }
            path.pop()
        }

        for (let i = 1; i <= s.length; i++) {
            dfs(0, i)
        }

        return result
    }

}