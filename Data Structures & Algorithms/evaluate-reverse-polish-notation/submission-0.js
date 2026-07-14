class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const symbol = new Set(['+', '-', '*', '/'])
        const stack = []

        const operators = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            '*': (a, b) => a * b,
            '/': (a, b) => Math.trunc(a / b) // 完美的向零截断
        };
        for (const token of tokens) {
            if (symbol.has(token)) {
                const num2 = stack.pop()
                const num1 = stack.pop()

                stack.push(operators[token](num1, num2))
            } else {
                stack.push(Number(token))
            }
        }

        return stack[0]


    }
}
