class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const row = board.length
        const col = board[0].length
        const dirs = [
            [1, 0],
            [- 1, 0],
            [0, 1],
            [0, - 1],
        ]
        const unSurrounded = Array.from({ length: row }, () => Array.from({ length: col }, () => false))

        const queue = []
        for (let i = 0; i < row; i++) {
            queue.push([i, 0])
            queue.push([i, col - 1])
        }

        for (let i = 0; i < col; i++) {
            queue.push([0, i])
            queue.push([row - 1, i])
        }
        let head = 0
        while (head < queue.length) {
            const size = queue.length - head
            for (let index = 0; index < size; index++) {
                const [r, c] = queue[head++];
                if (board[r][c] !== 'O') continue
                unSurrounded[r][c] = true
                for (const [x, y] of dirs) {
                    const nr = r + x
                    const nc = c + y
                    if (nr < 0 || nr >= row || nc < 0 || nc >= col) continue
                    if (unSurrounded[nr][nc]) continue
                    queue.push([nr, nc])
                }
            }
        }
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                if (!unSurrounded[i][j]) {
                    board[i][j] = 'X'
                }
            }
        }

    }
}
