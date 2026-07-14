class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {

        const stack = []
        const result = Array.from({ length: temperatures.length }, () => 0)
        for (const [i, temp] of temperatures.entries()) {
            while (stack.length && temperatures[stack[stack.length - 1]] < temp) {
                const j = stack.pop()
                result[j] = i - j
            }
            stack.push(i)
        }

        return result
    }
}
