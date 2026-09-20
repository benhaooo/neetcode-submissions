class TreeNode {
    constructor() {
        this.children = new Map();
        this.isEnd = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TreeNode();
        this.dot = '.'
    }
    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let node = this.root;
        for (const ch of word) {
            if (!node.children.has(ch)) {
                node.children.set(ch, new TreeNode());
            }
            node = node.children.get(ch);
        }
        node.isEnd = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        const backtrack = (node, index) => {
            if (index === word.length) {
                
                return !!node.isEnd
            }
            const ch = word[index]
            if (ch !== this.dot) {
                if (!node.children.has(ch)) return false
                return backtrack(node.children.get(ch), index + 1)
            }
            for (const child of node.children.values()) {
                if(backtrack(child, index + 1)) return true
            }
            return false
        }


        return backtrack(this.root, 0)

    }

}
