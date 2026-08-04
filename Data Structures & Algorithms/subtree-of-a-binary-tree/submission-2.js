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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        const serialize = (node) => {
            if (node === null) return '#'
            return `^${node.val}${serialize(node.left)}${serialize(node.right)}`
        }

        return serialize(root).includes(serialize(subRoot))
    }
}
