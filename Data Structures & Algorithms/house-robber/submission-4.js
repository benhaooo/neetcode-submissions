class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const n = nums.length
        const dp = Array.from({ length: n })
        dp[0] = nums[0]
        if (n === 1) return nums[0]
        dp[1] = Math.max(nums[0], nums[1])
        if (n === 2) return dp[1]
        for (let i = 2; i < n; i++) {
            dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
        }
        return dp[n - 1]

    }
}
