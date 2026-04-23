class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.reduce((acc, cur) => {
            return acc += `${cur.length}#${cur}`
        }, '')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const strs = []
        for (let i = 0; i < str.length;) {
            let j = i
            while (str[j] !== '#') {
                j++
            }
            const len = Number(str.slice(i, j))
            const s = str.slice(j + 1, j + len + 1)
            i = j + len + 1
            strs.push(s)
        }

        return strs
    }
}
