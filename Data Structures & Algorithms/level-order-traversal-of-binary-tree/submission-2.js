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
     * @return {number[][]}
     */
    levelOrder(root) {
        const result = []
        let level = 0
        const deep = (node, level) => {
            if (!node) return
            if (!result[level]) {
                result.push([])
            }
            const arr = result[level]
            arr.push(node.val)
            deep(node.left, level + 1)
            deep(node.right, level + 1)
        }
        deep(root, 0)

        return result
    }
}
