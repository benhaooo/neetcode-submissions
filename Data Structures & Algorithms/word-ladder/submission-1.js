class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        const wordset = new Set(wordList)
        
        if (!wordset.has(endWord)) return 0
        const queue = [[beginWord, 1]]
        wordset.delete(beginWord)
        let head = 0
        while (head < queue.length) {
            const [word, index] = queue[head++]
            if (word === endWord) return index

            const a = 'a'.charCodeAt(0)

            for (let i = 0; i < word.length; i++) {
                for (let j = 0; j < 26; j++) {
                    const ch = String.fromCharCode(a + j)
                    if (ch === word[i]) continue;
                    const next = word.slice(0, i) + ch + word.slice(i + 1)
                    if (wordset.has(next)) {
                        queue.push([next, index + 1])
                        wordset.delete(next)
                    }
                }
            }
        }

        return 0
    }
}
