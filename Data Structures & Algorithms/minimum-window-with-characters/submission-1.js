class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const counts = new Map();
        const countt = new Map();
        let result = "";
        let minLength = Infinity;
        for (const v of t) {
            countt.set(v, (countt.get(v) || 0) + 1);
        }
        let left = 0;

        let have = 0


        for (let right = 0; right < s.length; right++) {
            counts.set(s[right], (counts.get(s[right]) || 0) + 1);
            if (countt.has(s[right]) && counts.get(s[right]) === countt.get(s[right])) {
                have++;
            }
            if (have === countt.size) {
                while (have === countt.size) {
                    if (countt.get(s[left]) && counts.get(s[left]) - 1 < countt.get(s[left])) {
                        if (minLength > right - left + 1) {
                            minLength = right - left + 1;
                            result = s.slice(left, right + 1);
                        }
                        break;
                    }
                    if (countt.has(s[left]) && counts.get(s[left]) === countt.get(s[left])) {
                        have--;
                    }
                    counts.set(s[left], counts.get(s[left]) - 1);
                    left++;
                }
            }
        }
        return result;
    }
}
