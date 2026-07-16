class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const stack = []
        let maxH = -Infinity
        for (const [i, h] of heights.entries()) {
            while (stack.length && heights[stack[stack.length - 1]] > h) {
                const cur = stack.pop()
                const left = stack.length ? stack[stack.length - 1] : -1
                const area = (i - left - 1) * heights[cur]
                maxH = Math.max(area, maxH)
            }
            stack.push(i)
        }
        while (stack.length) {
            const cur = stack.pop()
            const left = stack.length ? stack[stack.length - 1] : -1
            const area = (heights.length - left - 1) * heights[cur]
            maxH = Math.max(area, maxH)
        }
        return maxH
    }
}
