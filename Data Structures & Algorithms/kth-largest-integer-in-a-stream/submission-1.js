class Heap {
    constructor(compare) {
        this.data = []
        this.compare = compare
    }
    get size() { return this.data.length }
    peek() {
        if (!this.size) return
        return this.data[0]
    }
    pop() {
        if (!this.size) return
        const top = this.data[0]

        const last = this.data.pop()

        if (this.size) {
            this.data[0] = last
            this.#down(0)
        }
        return top
    }
    push(value) {
        this.data.push(value)
        this.#up(this.size - 1)
    }


    #up(i) {
        let cur = i
        while (true) {
            const p = Math.floor((cur - 1) / 2)
            if (p < 0) break
            if (this.compare(this.data[p], this.data[cur]) < 0) break
            this.#swap(cur, p)
            cur = p
        }
    }
    #down(i) {
        let cur = i
        while (cur < this.size - 1) {
            let child = 2 * cur + 1
            if (child > this.size - 1) break
            const right = 2 * cur + 2
            if (right <= this.size - 1 && this.compare(this.data[child], this.data[right]) >= 0) {
                child = right
            }
            if (this.compare(this.data[cur], this.data[child]) < 0) break
            this.#swap(cur, child)
            cur = child
        }
    }
    #swap(i, j) {
        [this.data[i], this.data[j]] = [this.data[j], this.data[i]]
    }
}


class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.miniHeap = new Heap((a, b) => a - b)
        this.k = k
        for (const num of nums) {
            this.miniHeap.push(num)
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.miniHeap.push(val)

        while (this.miniHeap.size > this.k) {
            this.miniHeap.pop()
        }
        return this.miniHeap.peek()
    }
}
