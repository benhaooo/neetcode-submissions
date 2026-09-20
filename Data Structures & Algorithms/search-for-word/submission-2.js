class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const rows = board.length
        const cols = board[0].length
        const used = Array.from({ length: rows }, () => Array.from({ length: cols }, () => false))
        const dfs = (index, x, y) => {
            if (index === word.length) {
                return true
            }
            if (x < 0 || x >= rows || y < 0 || y >= cols) return

            if (board[x][y] !== word[index] || used[x][y]) return


            const steps = [
                [x, y - 1],
                [x, y + 1],
                [x - 1, y],
                [x + 1, y]
            ]

            used[x][y] = true

            for (const [a, b] of steps) {
                if (dfs(index + 1, a, b)) return true
            }

            used[x][y] = false

        }
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (dfs(0, r, c)) return true

            }
        }

        return false
    }
}
