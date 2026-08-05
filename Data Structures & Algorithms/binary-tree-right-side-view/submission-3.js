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
     * @return {number[]}
     */
    rightSideView(root) {
        const result = []
        const deep = (node, level = 0) => {
            if (!node) return
            if (result.length === level) result.push(node.val)
            deep(node.right, level + 1)
            deep(node.left, level + 1)

        }
        deep(root)
        return result
    }
}
