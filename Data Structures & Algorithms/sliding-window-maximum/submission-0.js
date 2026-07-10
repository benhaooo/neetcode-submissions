class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const result = [];
        const maxQueue = [];
        let left = 0
        for (let i = 0; i < k; i++) {
            while (maxQueue.length && nums[maxQueue[maxQueue.length - 1]] < nums[i]) {
                maxQueue.pop();
            }
            maxQueue.push(i);
        }

        result.push(nums[maxQueue[0]]);
        for (let right = k; right < nums.length; left++, right++) {
            if (left === maxQueue[0]) {
                maxQueue.shift();
            }
            while (maxQueue.length && nums[maxQueue[maxQueue.length - 1]] < nums[right]) {
                maxQueue.pop();
            }
            maxQueue.push(right);

            result.push(nums[maxQueue[0]]);

        }

        return result;

    }
}
