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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        const queue = [[p, q]]
        while (queue.length) {
            const [p, q] = queue.shift()
            if (p === null && q === null) continue
            if (p === null || q === null) return false
            if (p.val !== q.val) return false
            queue.push([p.left, q.left])
            queue.push([p.right, q.right])
        }
        return true

    }
}
