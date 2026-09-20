class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const result = []
        const path = []
        const subsets = (index) => {
            result.push([...path])
            for (let target = index; target < nums.length; target++) {
                path.push(nums[target])
                subsets(target + 1)
                path.pop()
            }
        }
        subsets(0)

        return result
    }
}
