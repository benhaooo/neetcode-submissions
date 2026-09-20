class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {

        const row = grid.length
        const col = grid[0].length

        const dirs = [
            [1, 0],
            [- 1, 0],
            [0, 1],
            [0, - 1],
        ]

        let day = 0
        let fresh = 0

        const queue = []

        for (let r = 0; r < row; r++) {
            for (let c = 0; c < col; c++) {
                if (grid[r][c] === 2) {
                    queue.push([r, c, 0])
                } else if (grid[r][c] === 1) {
                    fresh++
                }
            }
        }

        let head = 0
        while (head < queue.length) {
            const [r, c, d] = queue[head++];
            for (const dir of dirs) {
                const nr = r + dir[0]
                const nc = c + dir[1]
                if (nr < 0 || nr >= row || nc < 0 || nc >= col) continue
                if (grid[nr][nc] !== 1) continue
                grid[nr][nc] = 2
                queue.push([nr, nc, d + 1])
                fresh--
            }
            day = Math.max(d, day)

        }

        if (fresh > 0) return -1
        return day

    }
}
