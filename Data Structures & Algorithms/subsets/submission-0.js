class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const result = []

        const subsets = (index, set) => {

            if (index === nums.length) {
                result.push([...set])
                return
            }
            set.push(nums[index])
            subsets(index + 1, set)
            set.pop()
            subsets(index + 1, set)
        }
        subsets(0, [])

        return result
    }
}
