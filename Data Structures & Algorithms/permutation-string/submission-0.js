class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;
        const len = s1.length;
        const ss1 = s1.split("").sort().join("");
        let left = 0;
        for (let right = len - 1; right < s2.length; left++, right++) {
            const ss2 = s2
                .slice(left, right + 1)
                .split("")
                .sort()
                .join("");
            if (ss1 === ss2) {
                return true;
            }
        }
        return false;
    }
}
