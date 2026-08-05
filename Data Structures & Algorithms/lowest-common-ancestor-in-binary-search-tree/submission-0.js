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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        let curNode = root

        while (curNode !== null) {
            if (curNode.val > p.val && curNode.val > q.val) {
                curNode = curNode.left
                continue
            }
            if (curNode.val < p.val && curNode.val < q.val) {
                curNode = curNode.right
                continue
            }
            return curNode
        }
        return curNode
    }
}
