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
    diameterOfBinaryTree(root) {
        let maxDiameterDepth = 0
        const depth = (node) => {
            if (!node) return 0
            const left = depth(node.left)
            const right = depth(node.right)
            maxDiameterDepth = Math.max(maxDiameterDepth, left + right)
            return Math.max(left, right) + 1
        }

        depth(root)
        return maxDiameterDepth
    }
}
