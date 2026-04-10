class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // for (let i = 0; i < nums.length - 1; i++) {
        //     for (let j = i + 1; j < nums.length; j++) {
        //         if (nums[i] + nums[j] === target) {
        //             return [i, j]
        //         }
        //     }
        // }

        nums = nums.map((item, index) => [item, index]).sort((a, b) => a[0] - b[0])
        let i = 0, j = nums.length - 1
        while (i != j) {
            const result = nums[i][0] + nums[j][0]
            if (result > target) {
                j--
            } else if (result < target) {
                i++
            } else {
                return [nums[i][1], nums[j][1]]
            }
        }
    }
}
