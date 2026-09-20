/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root) {
        let result = 0
        if (!root) return result
        const dfs = (node, maxV = -Infinity) => {
            if (!node) return
            let newMaxV = maxV
            if (node.val >= maxV) {
                result++
                newMaxV = node.val
            }
            dfs(node.left, newMaxV)
            dfs(node.right, newMaxV)
        }
        dfs(root,)
        return result
    }
}
