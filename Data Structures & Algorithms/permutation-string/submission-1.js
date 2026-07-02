class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;
        const aChar = "a".charCodeAt(0);
        const count1 = Array.from({ length: 26 }, () => 0);
        const count2 = Array.from({ length: 26 }, () => 0);
        for (let i = 0; i < s1.length; i++) {
            count1[s1.charCodeAt(i) - aChar]++;
            count2[s2.charCodeAt(i) - aChar]++;
        }
        if (count1.every((v, i) => v === count2[i])) return true;

        let left = 0;
        let right = s1.length - 1;
        left++;
        right++;
        for (; right < s2.length; left++, right++) {
            count2[s2.charCodeAt(left - 1) - aChar]--;
            count2[s2.charCodeAt(right) - aChar]++;
            if (count1.every((v, i) => v === count2[i])) return true;
        }

        return false;
    }
}
