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
