class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let result = 0;
        for (let i = 0; i < height.length; i++) {
            let maxLeft = 0;
            let maxRight = 0;
            for (let j = 0; j < i; j++) {
                maxLeft = Math.max(height[j], maxLeft);
            }
            for (let k = height.length - 1; k > i; k--) {
                maxRight = Math.max(height[k], maxRight);
            }
            const water = Math.min(maxLeft, maxRight) - height[i];
            result += water < 0 ? 0 : water;
        }

        return result;
    }
}
