

class Heap {
    constructor(compare = (a, b) => { a - b }) {
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

class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const heap = new Heap(
            (a, b) => { return a.distant - b.distant }
        )
        for (const point of points) {
            const distant = Math.sqrt(Math.pow(point[0], 2) + Math.pow(point[1], 2))
            heap.push({
                distant,
                point
            })
        }
        const result = []
        for (let i = k; i > 0; i--) {
            result.push(heap.pop().point)
        }
        return result
    }
}
