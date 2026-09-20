class TreeNode {
    constructor() {
        this.children = new Map()
        this.isEnd = false
    }
}


class PrefixTree {
    constructor() {
        this.root = new TreeNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let node = this.root
        for (const ch of word) {
            if (!node.children.has(ch)) {
                node.children.set(ch, new TreeNode())
            }
            node = node.children.get(ch)
        }
        node.isEnd = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        const node = this.#findword(word)
        return !!node?.isEnd
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        const node = this.#findword(prefix)
        return !!node
    }

    #findword(word) {
        let node = this.root
        for (const ch of word) {
            if (!node.children.has(ch)) return
            node = node.children.get(ch)
        }

        return node
    }
}



class Solution {



    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        const dict = new PrefixTree()
        const row = board.length
        const col = board[0].length
        const result = new Set()
        const visted = Array.from({ length: row }, () => Array.from({ length: col }, () => false))
        for (const word of words) {
            dict.insert(word)
        }
        const backtrack = (r, c, w) => {
            if (r < 0 || r >= row || c < 0 || c >= col || visted[r][c]) return
            const cur = w + board[r][c]
            if (!dict.startsWith(cur)) return

            if (dict.search(cur)) {
                result.add(cur)
            }
            visted[r][c] = true

            const steps = [
                [r + 1, c],
                [r - 1, c],
                [r, c + 1],
                [r, c - 1]
            ]
            for (const [x, y] of steps) {
                backtrack(x, y, cur)
            }
            visted[r][c] = false
        }

        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                backtrack(i, j, '')
            }
        }

        return Array.from(result)
    }
}
