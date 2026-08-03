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
        if (!root) return 0
        const order = []
        const queue = [root]

        while (queue.length) {
            const node = queue.shift()
            order.push(node)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        const map = new Map()
        let maxDiameter = 0
        for (let i = order.length - 1; i >= 0; i--) {
            const node = order[i]
            const leftDepth = map.get(node.left) || 0
            const rightDepth = map.get(node.right) || 0
            maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth)
            map.set(node, Math.max(leftDepth, rightDepth) + 1)

        }
        return maxDiameter
    }
}
