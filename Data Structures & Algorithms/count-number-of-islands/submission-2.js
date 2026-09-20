class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let count = 0

        const row = grid.length
        const col = grid[0].length

        const dirs = [
            [1, 0],
            [- 1, 0],
            [0, 1],
            [0, - 1],
        ]


        const dfs = (r, c) => {
            if (r < 0 || r >= row || c < 0 || c >= col || grid[r][c] === '0') return
            grid[r][c] = '0'

            for (const dir of dirs) {
                dfs(r + dir[0], c + dir[1])
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
