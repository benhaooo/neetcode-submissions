class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = new Map()
        for (const num of nums) {
            const cur = map.get(num)
            if (cur) {
                return true
            }
            map.set(num, true)
        }
        return false

    }
}
