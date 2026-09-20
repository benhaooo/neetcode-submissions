class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {

        let maxArea = 0

        const row = grid.length
        const col = grid[0].length

        const dirs = [
            [1, 0],
            [- 1, 0],
            [0, 1],
            [0, - 1],
        ]


        const dfs = (r, c) => {
            if (r < 0 || r >= row || c < 0 || c >= col || grid[r][c] === 0) return 0
            grid[r][c] = 0

            let area = 1
            for (const dir of dirs) {
                area += dfs(r + dir[0], c + dir[1])
            }
            return area
        }
        for (let r = 0; r < row; r++) {
            for (let c = 0; c < col; c++) {
                if (grid[r][c] === 1) {
                    maxArea = Math.max(dfs(r, c), maxArea)
                }
            }

        }
        return maxArea
    }
}
