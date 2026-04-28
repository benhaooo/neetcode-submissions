class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const totalProduct = nums.reduce((acc, cur) => {
            return acc *= cur
        }, 1)
        const result = Array.from({ length: nums.length })
        for (let i = 0; i < nums.length; i++) {

            result[i] = nums[i] === 0 ? nums.reduce((acc, cur, index) => {
                return (index === i) ? acc : acc *= cur
            }, 1) : totalProduct / nums[i]
        }
        return result
    }
}
