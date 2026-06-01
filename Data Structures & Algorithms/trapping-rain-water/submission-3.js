class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let water = 0;
        let leftMax = 0;
        let rightMax = 0;
        let left = 0;
        let right = height.length - 1;
        while (left <= right) {
            if (height[left] <= height[right]) {
                if (height[left] > leftMax) {
                    leftMax = height[left];
                } else {
                    water += leftMax - height[left];
                }
                left++;
            } else {
                if (height[right] > rightMax) {
                    rightMax = height[right];
                } else {
                    water += rightMax - height[right];
                }
                right--;
            }
        }

        return water;
    }
}
