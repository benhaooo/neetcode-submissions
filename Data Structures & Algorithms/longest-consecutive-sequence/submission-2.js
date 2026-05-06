class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let longest = 0;
        for (const num of set) {
            if (!set.has(num - 1)) {
                let curNum = num;
                let curLen = 1;
                while (set.has(curNum + 1)) {
                    curLen++;
                    curNum = curNum + 1;
                }
                longest = Math.max(curLen, longest);
            }
        }

        return longest;
    }
}
