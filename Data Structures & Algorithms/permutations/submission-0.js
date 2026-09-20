class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const result = []
        const path = []

        const permute = (index) => {
            if (path.length === nums.length) {
                result.push([...path])
            }
            for (let i = 0; i < nums.length; i++) {
                if (path.includes(nums[i])) continue
                path.push(nums[i])
                permute(index)
                path.pop()
            }
        }
        permute(0)
        return result
    }
}
