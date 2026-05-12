class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const map = new Map();
        for (let i = 0; i < numbers.length; i++) {
            const diff = target - numbers[i];
            if (map.has(diff) && numbers[map.get(diff)] !== numbers[i]) {
                return [map.get(diff) + 1, i + 1];
            }
            map.set(numbers[i], i);
        }
    }
}
