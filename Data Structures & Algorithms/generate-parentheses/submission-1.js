class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const result = []
        const generateParenthesis = (path, left, right) => {
            if (path.length === n * 2) {
                result.push(path)
                return
            }
            if (left < n) {
                generateParenthesis(path + '(', left + 1, right)
            }
            if (right < left) {
                generateParenthesis(path + ')', left, right + 1)
            }
        }

        generateParenthesis('', 0, 0)
        return result
    }
}
