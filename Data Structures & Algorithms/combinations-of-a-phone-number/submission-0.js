
/**
2 : abc
3 : def
4 : ghi
5 : jkl
6 : mno
7 : pqrs
8 : tuv
9 : wxyz
 */
const numMap = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
}

class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */


    letterCombinations(digits) {
        const result = []
        const path = []
        if(!digits) return result

        const keybord = digits.split('').map((v) => numMap[v].split(''))

        const backtrack = (index) => {
            if (index === keybord.length) {
                result.push(path.join(''))
                return
            }

            const keys = keybord[index];
            for (let j = 0; j < keys.length; j++) {
                path.push(keys[j])
                backtrack(index + 1)
                path.pop()
            }
        }

        backtrack(0)
        return result

    }
}
