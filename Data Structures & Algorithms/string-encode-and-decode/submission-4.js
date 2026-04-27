class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // return strs.map(item => item.replace(/\//g, '//')).join('/,')
        return strs.reduce((acc, cur) => {
            return `${acc}${cur.replace(/\//,'//')}/,`
        },'')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const strs = []
        let word = ''

        //Hel//lo/,World

        for (let i = 0; i < str.length; i++) {
            if (str[i] === '/') {
                if (str[i + 1] === ',') {
                    strs.push(word)
                    word = ''
                    i ++
                    continue
                } else {
                    word += '/'
                    i ++
                    continue
                }
            } else {
                word += str[i]
            }
        }
        if(word) strs.push(word)
        return strs
    }
}
