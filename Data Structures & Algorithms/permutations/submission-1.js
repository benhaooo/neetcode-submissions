class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const result = []
        const path = []
        const used = Array.from({ length: nums.length }, () => false)

        const permute = (index) => {
            if (path.length === nums.length) {
                result.push([...path])
            }
            for (let i = 0; i < nums.length; i++) {
                if (used[i]) continue
                path.push(nums[i])
                used[i] = true
                permute(index)
                path.pop()
                used[i] = false
            }
        }
        permute(0)
        return result
    }
}
