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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let result = {
            next: null
        }

        let index1 = list1
        let index2 = list2

        let index = result

        while (index1 || index2) {
            if (!index1) {
                index.next = index2
                index = index.next
                index2 = index2.next
                continue
            }
            if (!index2) {
                index.next = index1
                index = index.next
                index1 = index1.next
                continue
            }
            if (index1.val > index2.val) {
                index.next = index2
                index = index.next
                index2 = index2.next
            } else {
                index.next = index1
                index = index.next
                index1 = index1.next
            }
        }

        return result.next
    }
}
