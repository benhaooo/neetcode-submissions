class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((a, b) => a - b);
        const result = [];
        for (let i = 0; i < nums.length - 2; i++) {
            const target = 0 - nums[i];
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            let left = i + 1;
            let right = nums.length - 1;
            while (left < right) {
                const added = nums[left] + nums[right];
                if (added > target) right--;
                else if (added < target) left++;
                else {
                    result.push([nums[i], nums[left], nums[right]]);
                    while (nums[left] === nums[left + 1] && right > left) left++;
                    while (nums[right] === nums[right - 1] && right > left) right--;
                    left++;
                    right--;
                }
            }
        }
        return result;
    }
}
