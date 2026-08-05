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
        const queue = [root]
        while (queue.length) {
            const arr = new Array()
            for (let i = queue.length; i > 0; i--) {
                const node = queue.shift()
                arr.push(node.val)
                if (node.left) queue.push(node.left)
                if (node.right) queue.push(node.right)
            }
            result.push(arr)
        }
        return result
    }
}
