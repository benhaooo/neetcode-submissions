class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false
        // return s.split('').sort().join('')===t.split('').sort().join('')

        const counter = {}
        for (let i = 0; i <= s.length; i++) {
            counter[s[i]] = (counter[s[i]] || 0) + 1
            counter[t[i]] = (counter[t[i]] || 0) - 1
        }
        for(const [,value] of Object.entries(counter)){
            if(value!==0){
                return false
            }
        }
        return true
    }
}
