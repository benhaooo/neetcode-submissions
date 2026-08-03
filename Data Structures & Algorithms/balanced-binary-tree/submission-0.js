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
     * @return {boolean}
     */
    isBalanced(root) {
        let result = true
        const depth = (node) => {
            if (!node) return 0
            const ld = depth(node.left)
            const rd = depth(node.right)
            if (Math.abs(ld - rd) > 1) {
                result = false
            }
            return Math.max(ld, rd) + 1
        }
        depth(root)
        return result
    }
}
