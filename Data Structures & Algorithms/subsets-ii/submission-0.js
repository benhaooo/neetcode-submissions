class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const result = []
        const path = []
        nums = nums.sort()
        const subset = (index) => {
            result.push([...path])
            for (let i = index; i < nums.length; i++) {
                if (i > index && nums[i] === nums[i - 1]) continue
                path.push(nums[i])
                subset(i + 1)
                path.pop()
            }
        }
        subset(0)
        return result

    }
}
