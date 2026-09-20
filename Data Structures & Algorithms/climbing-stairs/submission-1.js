class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const dp = Array.from({ length: n + 1 })
        dp[0] = 1
        if (n >= 1) {
            dp[1] = 1
        }
        for (let i = 2; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2]
        }

        return dp[n]
    }
}
