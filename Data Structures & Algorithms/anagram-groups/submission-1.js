class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = []
        const used = Array.from({ length: strs.length }, (v, i) => false)
        for (let i = 0; i < strs.length; i++) {
            if (used[i]) continue
            used[i] = true
            const group = [strs[i]]

            for (let j = i + 1; j < strs.length; j++) {
                if (used[j]) continue
                if (this.isAnagrams(strs[i], strs[j])) {
                    used[j] = true
                    group.push(strs[j])
                }
            }
            groups.push(group)
        }
        return groups
    }
    isAnagrams(str1, str2) {
        if (str1.length !== str2.length) return false
        const count = Array.from({ length: 26 }, (v, i) => 0)
        const base = 'a'.charCodeAt(0)
        for (let i = 0; i < str1.length; i++) {
            count[str1.charCodeAt(i) - base]++
            count[str2.charCodeAt(i) - base]--

        }
        return count.every(v => v === 0)
    }
}
