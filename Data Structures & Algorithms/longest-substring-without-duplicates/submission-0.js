class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let res = 0;
        const window = new Map();
        for (let right = 0; right < s.length; right++) {
            const item = s[right];
            window.set(item, (window.get(item) || 0) + 1);
            while (window.get(item) > 1) {
                window.set(s[left], window.get(s[left]) - 1);
                left++;
            }
            res = Math.max(res, right - left + 1);
        }
        return res
    }
}
