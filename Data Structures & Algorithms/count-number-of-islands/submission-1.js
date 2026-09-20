class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let count = 0

        const row = grid.length
        const col = grid[0].length


        const dfs = (r, c) => {
            if (r < 0 || r >= row || c < 0 || c >= col || grid[r][c] === '0') return
            grid[r][c] = '0'
            const dirs = [
                [r + 1, c],
                [r - 1, c],
                [r, c + 1],
                [r, c - 1],
            ]

            for (const dir of dirs) {
                dfs(dir[0], dir[1])
            }
        }
        for (let r = 0; r < row; r++) {
            for (let c = 0; c < col; c++) {
                if (grid[r][c] === '1') {
                    count++
                    dfs(r, c)
                }
            }

        }
        return count

    }
}
