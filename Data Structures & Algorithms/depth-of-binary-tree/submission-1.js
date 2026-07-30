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
    maxDepth(root) {
        if (!root) return 0
        const queue = [root]
        let deep = 0
        while (queue.length) {
            for (let levelSize = queue.length; levelSize > 0; levelSize--) {
                const node = queue.shift()
                if (node.left) queue.push(node.left)
                if (node.right) queue.push(node.right)
            }
            deep++
        }

        return deep
    }
}
