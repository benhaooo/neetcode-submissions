class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefixProduc = Array.from({ length: nums.length }, () => 1)
        const postfixProduc = Array.from({ length: nums.length }, () => 1)
        let product = 1
        for (let i = 0; i < nums.length; i++) {
            if (i - 1 >= 0) {
                product *= nums[i - 1]
            }
            prefixProduc[i] = product
        }
        product = 1
        for (let i = nums.length - 1; i >= 0; i--) {
            if (i + 1 < nums.length) {
                product *= nums[i + 1]
            }
            postfixProduc[i] = product
        }

        const result = Array.from({ length: nums.length })
        for (let i = 0; i < nums.length; i++) {
            result[i] = prefixProduc[i] * postfixProduc[i]
        }

        return result
    }
}
