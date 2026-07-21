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
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null
        let next = head
        while (next) {
            next.prev = prev
            prev = next
            next = next.next
            prev.next = prev.prev
        }
        return prev

    }
}
