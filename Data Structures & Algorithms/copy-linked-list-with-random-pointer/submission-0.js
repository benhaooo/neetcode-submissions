// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (!head) return head
        const map = new Map()


        let cur = head
        while (cur) {
            const newNode = new Node(cur.val, cur.next, cur.random)
            map.set(cur, newNode)
            cur = cur.next
        }

        cur = head
        while (cur) {
            const newNode = map.get(cur)
            newNode.next = map.get(cur.next) || null
            newNode.random = map.get(cur.random) || null
            cur = cur.next
        }
        return map.get(head)

    }
}
