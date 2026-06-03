class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxP = 0;
        let preMin = Infinity;
        for (let i = 0; i < prices.length; i++) {
            if (prices[i] < preMin) preMin = prices[i];
            const curP = prices[i] - preMin;
            if (curP > maxP) maxP = curP;
        }

        return maxP;
    }
}
