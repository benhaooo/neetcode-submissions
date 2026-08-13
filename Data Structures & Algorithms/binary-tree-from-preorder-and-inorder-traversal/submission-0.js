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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {

        const valIdxMap = inorder.reduce((acc, cur, idx) => {
            acc.set(cur, idx)
            return acc
        }, new Map())
        let index = 0
        const buildTree = (left, right) => {
            if (left > right) return null
            const value = preorder[index++]
            const mid = valIdxMap.get(value)
            const root = new TreeNode(value)
            root.left = buildTree(left, mid - 1)
            root.right = buildTree(mid + 1, right)
            return root

        }
        return buildTree(0, inorder.length - 1)

    }
}
