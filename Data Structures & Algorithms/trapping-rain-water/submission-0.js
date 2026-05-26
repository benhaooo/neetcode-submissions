class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const stack = [];
        let result = 0;
        for (let i = 0; i < height.length; i++) {
            while (stack.length && height[stack[stack.length - 1]] < height[i]) {
                const top = stack.pop();
                if (!stack.length) break;
                const left = stack[stack.length - 1];
                const right = i;

                const w = right - left - 1;
                const water = w * (Math.min(height[left], height[right]) - height[top]);
                result += water;
            }
            stack.push(i);
        }
        return result;
    }
}
