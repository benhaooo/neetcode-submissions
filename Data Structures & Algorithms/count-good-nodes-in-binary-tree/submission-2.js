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
        const dfs = (node, maxV) => {
            if (!node) return 0
            const isGoodNode = node.val >= maxV ? 1 : 0
            const newMaxV = Math.max(maxV, node.val)
            return isGoodNode + dfs(node.left, newMaxV) + dfs(node.right, newMaxV)
        }

        return dfs(root, -Infinity)
    }
}
