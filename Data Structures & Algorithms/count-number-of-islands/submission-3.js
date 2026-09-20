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
        const stack = []
        for (let r = 0; r < row; r++) {
            for (let c = 0; c < col; c++) {
                if (grid[r][c] === '1') {
                    count++
                    stack.push([r, c])
                    while (stack.length) {
                        const [x, y] = stack.pop()
                        if (x < 0 || x >= row || y < 0 || y >= col || grid[x][y] === '0') continue
                        grid[x][y] = '0'
                        for (const dic of dirs) {
                            stack.push([x + dic[0], y + dic[1]])
                        }
                    }
                }
            }

        }

        return count

    }
}
