
class Node {
    constructor(key, value, prev, next) {
        this.key = key
        this.value = value
        this.prev = prev
        this.next = next
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.head = new Node(0, 0)
        this.tail = new Node(0, 0)
        this.map = new Map()
        this.capacity = capacity
        this.head.next = this.tail
        this.tail.prev = this.head
    }


    #removeNode(node) {
        node.prev.next = node.next
        node.next.prev = node.prev
    }
    #insertNodeHead(node) {
        const next = this.head.next
        this.head.next = node
        node.prev = this.head
        node.next = next
        next.prev = node
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.map.has(key)) return -1
        const node = this.map.get(key)
        this.#removeNode(node)
        this.#insertNodeHead(node)
        return node.value
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.map.has(key)) {
            const node = this.map.get(key)
            node.value = value
            this.#removeNode(node)
            this.#insertNodeHead(node)
            return
        } else {
            const node = new Node(key, value)
            this.map.set(key, node)
            this.#insertNodeHead(node)
            if (this.map.size > this.capacity) {
                this.map.delete(this.tail.prev.key)
                this.#removeNode(this.tail.prev)
            }
        }


    }
}
