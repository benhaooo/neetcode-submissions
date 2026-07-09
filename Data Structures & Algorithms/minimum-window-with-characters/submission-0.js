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


        for (let right = 0; right < s.length; right++) {
            counts.set(s[right], (counts.get(s[right]) || 0) + 1);
            if (Array.from(countt.entries()).every(([k, v]) => counts.get(k) >= v)) {
                while (Array.from(countt.entries()).every(([k, v]) => counts.get(k) >= v)) {
                    if (countt.get(s[left]) && counts.get(s[left]) - 1 < countt.get(s[left])) {
                        if(minLength > right - left + 1) {
                            minLength = right - left + 1;
                            result = s.slice(left, right + 1);
                        }
                        break;
                    }
                    counts.set(s[left], counts.get(s[left]) - 1);
                    left++;
                }
            }
        }
        return result;
    }
}
