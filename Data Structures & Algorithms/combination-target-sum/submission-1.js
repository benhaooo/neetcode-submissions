class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = []
        const path = []
        const combination = (index, sum) => {
            if (sum > target) return

            if (sum === target) {
                result.push([...path])
                return
            }
            for (let i = index; i < nums.length; i++) {
                path.push(nums[i])
                combination(i, sum + nums[i])
                path.pop()
            }
        }

        combination(0, 0)

        return result

    }
}
