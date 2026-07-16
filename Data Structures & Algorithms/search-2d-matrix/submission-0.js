class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const n = matrix[0].length
        const m = matrix.length
        let left = 0
        let right = m * n - 1
        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2)
            const y = Math.floor(mid / n)
            const x = mid % n
            const value = matrix[y][x]
            if (value === target) {
                return true
            } else if (value > target) {
                right = mid - 1
            } else if (value < target) {
                left = mid + 1
            }
        }
        return false
    }
}
