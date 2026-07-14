class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    /**
     * 
tokens=["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
     */
    evalRPN(tokens) {
        const sibol = new Set(['+', '-', '*', '/'])
        const stack = []
        for (const token of tokens) {
            if (sibol.has(token)) {
                const num2 = stack.pop()
                const num1 = stack.pop()
                let cul
                switch (token) {
                    case '+':
                        cul = num1 + num2
                        break
                    case '-':
                        cul = num1 - num2
                        break
                    case '*':
                        cul = num1 * num2
                        break
                    case '/':
                        cul = Math.trunc(num1 / num2)
                        break
                }
                stack.push(cul)
            } else {
                stack.push(Number(token))
            }
        }

        return stack[0]


    }
}
