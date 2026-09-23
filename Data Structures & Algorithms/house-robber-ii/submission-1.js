class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {


        const linerob = (start, end) => {
            const n = end - start
            if (n === 1) return nums[start]
            let prev1 = Math.max(nums[start], nums[start + 1])
            let prev2 = nums[start]
            for (let i = start + 2; i < end; i++) {
                const curr = Math.max(prev1, prev2 + nums[i])
                prev2 = prev1
                prev1 = curr
            }

            return prev1
        }

        if (nums.length === 1) return nums[0]
        return Math.max(linerob(1, nums.length), linerob(0, nums.length - 1))
    }



}
