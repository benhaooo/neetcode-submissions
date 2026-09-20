/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if(!node) return node
        const nodeMap = new Map()

        const clone = (node) => {
            if (nodeMap.has(node)) return nodeMap.get(node)
            const newNode = new Node(node.val)
            nodeMap.set(node, newNode)
            for (const neighbor of node.neighbors) {
                newNode.neighbors.push(clone(neighbor))
            }
            return newNode
        }
        return clone(node)
    }
}
