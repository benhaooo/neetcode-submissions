class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */

    /**
        爱吃香蕉的柯柯给你一个整数数组 piles，其中 piles[i] 表示第 i 堆香蕉的个数。同时给你一个整数 h，表示你吃完所有香蕉的限时（小时数）。你可以决定自己吃香蕉的速度 $k$（单位：个/小时）。每个小时，你可以选择任意一堆香蕉，并从中吃掉 $k$ 个。如果这堆香蕉少于 $k$ 个，你可以在这一小时内吃完这堆香蕉，但不能在同一个小时内去吃另一堆香蕉。请返回你能在 $h$ 小时内吃完所有香蕉的最小整数速度 $k$。
     */
    minEatingSpeed(piles, h) {
        let maxK = Math.max(...piles)
        let minK = 1
        while (minK < maxK) {
            const midK = minK + Math.floor((maxK - minK) / 2)
            const needH = piles.reduce((acc, cur) => {
                return acc += Math.ceil(cur / midK)
            }, 0)
            if (needH <= h) {
                maxK = midK
            } else if (needH > h) {
                minK = midK + 1
            }
        }

        return minK
    }
}
