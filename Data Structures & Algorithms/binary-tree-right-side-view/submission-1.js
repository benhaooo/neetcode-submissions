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
        if (!root) return result
        let queue = [root]
        while (queue.length) {
            const next = []
            const arr = []
            for (const node of queue) {
                arr.push(node.val)
                if (node.left) next.push(node.left)
                if (node.right) next.push(node.right)
            }
            queue = next
            result.push(arr.pop())
        }
        return result
    }
}
