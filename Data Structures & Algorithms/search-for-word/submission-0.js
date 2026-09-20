class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let result = false
        const m = board.length
        const n = board[0].length
        const used = Array.from({ length: m }, () => Array.from({ length: n }, () => false))
        const dfs = (index, x, y) => {
            if (result) return
            if (index === word.length - 1) {
                result = true
                return
            }

            const steps = [
                [x, y - 1],
                [x, y + 1],
                [x - 1, y],
                [x + 1, y]
            ]
            const nextIndex = index + 1

            for (const [a, b] of steps) {
                if (a >= 0 && a < m && b >= 0 && b < n && !used[a][b]) {
                    if (result) return
                    if (word[nextIndex] !== board[a][b]) continue
                    used[a][b] = true
                    dfs(nextIndex, a, b)
                    used[a][b] = false
                }
            }

        }
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (word[0] === board[i][j]) {
                    used[i][j] = true
                    dfs(0, i, j)
                    used[i][j] = false
                    if (result) return result
                }
            }
        }

        return result
    }
}
