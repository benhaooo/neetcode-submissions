class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // const map = {}
        // for (const i of nums) {
        //     map[i] = (map[i] || 0) + 1
        // }
        // const sorted = Object.entries(map).sort((a, b) => b[1] - a[1])
        // return sorted.slice(0, k).map((item) => item[0])

        const map = new Map()
        for (const i of nums) {
            map.set(i, (map.get(i) || 0) + 1)
        }
        return Array.from([...map]).sort((a, b) => b[1] - a[1]).slice(0, k).map((item) => item[0])

    }
}
