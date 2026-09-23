
class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let maxLen = 0
        let maxStart
        const expand = (left, right) => {

            while (left >= 0 && right < s.length && s[left] === s[right]) {
                left--
                right++
            }
            const len = right - left - 1
            if (len > maxLen) {
                maxLen = len
                maxStart = left + 1
            }
        }

        for (let i = 0; i < s.length; i++) {
            expand(i, i)
            expand(i, i + 1)
        }

        return s.slice(maxStart, maxStart + maxLen)
    }
}
