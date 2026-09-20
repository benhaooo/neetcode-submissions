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
    isValidBST(root) {

        let preVal = -Infinity
        const inorder = (node) => {
            if (!node) return true
            const validLeft = inorder(node.left)
            if (!validLeft) return false
            if (!(node.val > preVal)) return false
            preVal = node.val;
            const validRight = inorder(node.right)
            return validRight
        }
        return inorder(root)
    }
}
