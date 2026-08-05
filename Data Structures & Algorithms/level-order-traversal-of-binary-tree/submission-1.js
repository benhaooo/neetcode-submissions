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
        if (!root) return result
        let queue = [root]
        while (queue.length) {
            const next = []
            const level = []
            result.push(level)

            for (const node of queue) {
                level.push(node.val)
                if (node.left) next.push(node.left)
                if (node.right) next.push(node.right)
            }
            queue = next
        }
        return result
    }
}
