class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let total = 0;
        const leftMaxs = Array.from({ length: height.lenth });
        const rightMaxs = Array.from({ length: height.lenth });
        leftMaxs[0] = height[0];
        rightMaxs[height.length - 1] = height[height.length - 1];
        for (let i = 1; i < height.length; i++) {
            leftMaxs[i] = Math.max(leftMaxs[i - 1], height[i]);
        }
        for (let i = height.length - 2; i >= 0; i--) {
            rightMaxs[i] = Math.max(rightMaxs[i + 1], height[i]);
        }

        for (let i = 1; i < height.length; i++) {
            const water = Math.min(leftMaxs[i], rightMaxs[i]) - height[i];
            total += water;
        }

        return total;
    }
}
