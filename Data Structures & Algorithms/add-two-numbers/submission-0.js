/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let result = new ListNode()

        let i1 = l1
        let i2 = l2
        let i = result
        let p = 0
        while (i1 || i2 || p) {
            const v1 = i1 ? i1.val : 0
            const v2 = i2 ? i2.val : 0
            const r = v1 + v2 + p
            i.next = new ListNode(r % 10)
            i = i.next
            p = Math.floor(r / 10)
            i1 = i1 ? i1.next : i1
            i2 = i2 ? i2.next : i2
        }


        return result.next
    }
}
