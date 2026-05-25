class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let maxArea = 0;
        while (left < right) {
            maxArea = Math.max(maxArea, Math.min(heights[left], heights[right]) * (right - left));
            if (heights[left] < heights[right]) {
                while (heights[left + 1] == heights[left] && left < right) left++;
                left++;
            } else if (heights[left] > heights[right]) {
                while (heights[right - 1] == heights[right] && left < right) right--;
                right--;
            } else {
                while (heights[left + 1] == heights[left] && left < right) left++;
                while (heights[right - 1] == heights[right] && left < right) right--;

                left++;
                right--;
            }
        }
        return maxArea;
    }
}
