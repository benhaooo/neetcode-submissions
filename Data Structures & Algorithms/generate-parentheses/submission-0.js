class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const result = []
        const path = []
        let leftcount = n
        let rightcount = 0
        const generateParenthesis = () => {
            if (path.length === n * 2) {
                result.push(path.join(''))
                return
            }
            const parenthesis = []
            if (rightcount > 0) parenthesis.push(')')
            if (leftcount > 0) parenthesis.push('(')

            for (const p of parenthesis) {
                const isLeft = p === '('
                path.push(p)
                if (isLeft) {
                    leftcount--
                    rightcount++
                } else {
                    rightcount--
                }
                generateParenthesis()
                path.pop()
                if (isLeft) {
                    leftcount++
                    rightcount--
                } else {
                    rightcount++
                }
            }
        }

        generateParenthesis()
        return result
    }
}
