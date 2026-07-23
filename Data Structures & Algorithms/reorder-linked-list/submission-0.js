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
     * @return {void}
     */
    reorderList(head) {
        let slow = head
        let fast = head
        while (fast?.next && fast.next.next) {
            slow = slow.next
            fast = fast.next.next
        }
        let pre = null
        let cur = slow.next

        slow.next = null
        while (cur) {
            const next = cur.next
            cur.next = pre
            pre = cur
            cur = next
        }
        let right = pre
        let left = head
        while (right && left) {
            const nextL = left.next
            const nextR = right.next
            left.next = right
            right.next = nextL
            left = nextL
            right = nextR
        }

        return head
    }
}
