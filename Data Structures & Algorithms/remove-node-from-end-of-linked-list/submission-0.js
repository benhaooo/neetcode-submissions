/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */


// 012345  1
class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        const demmy = new ListNode(0)
        demmy.next = head
        let d = demmy
        let f = demmy
        // 多走一步
        for (let i = 0; i < n; i++) {
            f = f.next
        }
        while (f.next) {
            f = f.next
            d = d.next
        }

        d.next = d.next.next

        return demmy.next
    }
}
