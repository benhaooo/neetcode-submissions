class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const row = grid.length
        const col = grid[0].length

        const dirs = [
            [1, 0],
            [- 1, 0],
            [0, 1],
            [0, - 1],
        ]

        const queue = []
        for (let r = 0; r < row; r++) {
            for (let c = 0; c < col; c++) {
                if (grid[r][c] === 0) {
                    queue.push([r, c])
                }
            }
        }
        let head = 0
        while (head < queue.length) {
            const [r, c] = queue[head]

            for (const [x, y] of dirs) {
                const nr = r + x
                const nc = c + y
                if (nr < 0 || nr >= row || nc < 0 || nc >= col) continue
                if (grid[nr][nc] <= 0 || grid[nr][nc] !== 2147483647) continue
                grid[nr][nc] = grid[r][c] + 1
                queue.push([nr, nc])
            }
            head++

        }

    }
}
