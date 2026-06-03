class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxP = 0;
        let left = 0;
        let right = left + 1;
        while (right < prices.length) {
            if (prices[left] < prices[right]) {
                maxP = Math.max(prices[right] - prices[left], maxP);
            } else {
                left = right;
            }
            right++;
        }

        return maxP;
    }
}
