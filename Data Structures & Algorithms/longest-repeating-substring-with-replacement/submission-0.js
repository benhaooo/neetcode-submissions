class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let res = 0;
        let left = 0;
        const map = new Map();
        let maxFreq = 0;
        for (let right = 0; right < s.length; right++) {
            const curValue = s[right];
            const curCount = (map.get(curValue) || 0) + 1;
            maxFreq = Math.max(maxFreq, curCount);
            map.set(curValue, curCount);
            while (right - left + 1 - maxFreq > k) {
                map.set(s[left], map.get(s[left]) - 1);
                maxFreq = Math.max(maxFreq, map.get(s[left]));

                left += 1;
            }
            res = Math.max(res, right - left + 1);
        }
        return res;
    }
}
