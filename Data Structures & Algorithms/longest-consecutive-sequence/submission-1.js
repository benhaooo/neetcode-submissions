class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (!nums.length) return 0;
        let maxLen = 1;
        let curLen = 1;

        nums = nums.sort((a, b) => a - b);
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] === nums[i + 1]) continue;
            if (nums[i] + 1 === nums[i + 1]) {
                curLen++;
            } else {
                curLen = 1;
            }
            maxLen = Math.max(maxLen, curLen);
        }

        return maxLen;
    }
}
