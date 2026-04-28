class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefixProduc = Array.from({ length: nums.length }, () => 1)
        const postfixProduc = Array.from({ length: nums.length }, () => 1)
        for (let i = 1; i < nums.length; i++) {
            prefixProduc[i] = prefixProduc[i - 1] * nums[i - 1]
        }

        for (let i = nums.length - 2; i >= 0; i--) {
            postfixProduc[i] = postfixProduc[i + 1] * nums[i + 1]
        }

        const result = Array.from({ length: nums.length })
        for (let i = 0; i < nums.length; i++) {
            result[i] = prefixProduc[i] * postfixProduc[i]
        }

        return result
    }
}
