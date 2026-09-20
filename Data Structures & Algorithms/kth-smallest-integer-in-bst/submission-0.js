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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let count = 0
        const inorder = (node) => {
            if (!node) return
            const lv = inorder(node.left)
            if (lv) return lv
            count++
            if (count === k) return node.val
            return inorder(node.right)
        }
        return inorder(root)
    }
}
