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
        let count = k
        let curr = root
        const stack = []
        while (stack.length || curr) {
            while (curr) {
                stack.push(curr)
                curr = curr.left
            }
            const node = stack.pop()
            count--
            if (count === 0) {
                return node.val
            }
            curr = node.right
        }
    }
}
