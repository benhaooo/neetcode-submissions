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
        const dfs = (node, maxV) => {
            if (!node) return
            if (node.val >= maxV) {
                result++
                maxV = node.val
            }
            dfs(node.left, maxV)
            dfs(node.right, maxV)
        }
        dfs(root, root.val)
        return result
    }
}
