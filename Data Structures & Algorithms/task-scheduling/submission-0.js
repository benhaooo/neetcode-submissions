
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
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const cooling = new Map()
        const heap = new Heap((a, b) => b.count - a.count)
        const counter = tasks.reduce((acc, cur) => {
            return acc.set(cur, (acc.get(cur) || 0) + 1)
        }, new Map())

        for (const [key, value] of counter) {
            heap.push({ task: key, count: value })
        }
        let index = 0
        while (heap.size || cooling.size) {
            const hot = cooling.get(index)
            if (hot) {
                heap.push(hot)
                cooling.delete(index)
            }

            if (heap.size) {
                const node = heap.pop()
                node.count--
                if (node.count > 0) {
                    const next = index + n + 1

                    cooling.set(next, node)
                }

            } 
            index++
        }
        return index


    }
}
