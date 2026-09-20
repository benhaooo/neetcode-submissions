class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const result = []
        const row = heights.length
        const col = heights[0].length

        const pacific = Array.from({ length: row }, () => Array.from({ length: col }, () => false))
        const atlantic = Array.from({ length: row }, () => Array.from({ length: col }, () => false))

        const dirs = [
            [1, 0],
            [- 1, 0],
            [0, 1],
            [0, - 1],
        ]
        const dfs = (r, c, arr) => {
            arr[r][c] = true

            for (const [x, y] of dirs) {
                const nr = r + x
                const nc = c + y
                if (nr < 0 || nr >= row || nc < 0 || nc >= col) continue
                if (arr[nr][nc]) continue
                if (heights[nr][nc] < heights[r][c]) continue
                dfs(nr, nc, arr)
            }
        }

        for (let index = 0; index < col; index++) {
            dfs(0, index, pacific)
        }

        for (let index = 0; index < row; index++) {
            dfs(index, 0, pacific)
        }

        for (let index = 0; index < col; index++) {
            dfs(row - 1, index, atlantic)
        }

        for (let index = 0; index < row; index++) {
            dfs(index, col - 1, atlantic)
        }

        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                if (pacific[i][j] && atlantic[i][j]) result.push([i, j])
            }
        }
        return result

    }
}
