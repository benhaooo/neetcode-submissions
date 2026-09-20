class Heap {
    constructor(compare) {
        this.compare = compare || ((a, b) => (a - b))
        this.data = []
    }

    get size() {
        return this.data.length
    }

    push(node) {
        this.data.push(node)
        this.#up(this.data.length - 1)
    }

    pop() {
        if (this.data.length === 1) return this.data.pop()
        const node = this.data[0]
        this.data[0] = this.data.pop()
        this.#down(0)
        return node
    }



    #up(index) {
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2)
            if (this.compare(this.data[index], this.data[parent]) >= 0) break;
            [this.data[index], this.data[parent]] = [this.data[parent], this.data[index]];
            index = parent
        }
    }

    #down(index) {
        while (true) {
            const left = 2 * index + 1
            const right = 2 * index + 2
            if (left >= this.data.length) break

            let next = left
            if (
                right < this.data.length &&
                this.compare(this.data[right], this.data[left]) < 0
            ) {
                next = right;
            }

            if (this.compare(this.data[next], this.data[index]) >= 0) break;
            [this.data[index], this.data[next]] = [this.data[next], this.data[index]];
            index = next
        }
    }
}


class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        const dist = Array.from({ length: n + 1 }, () => Infinity)
        dist[k] = 0
        const heap = new Heap((a, b) => a[1] - b[1])
        heap.push([k, 0])
        const graph = Array.from({ length: n + 1 }, () => [])
        for (const [a, b, v] of times) {
            graph[a].push([b, v])
        }
        while (heap.size) {
            const [cur, curDist] = heap.pop()
            for (const [next, v] of graph[cur]) {
                const nextDist = dist[cur] + v
                if (nextDist >= dist[next]) continue
                dist[next] = nextDist
                heap.push([next, nextDist])
            }
        }

        let result = 0
        for (let i = 1; i < dist.length; i++) {
            result = Math.max(result, dist[i])
        }

        return result === Infinity ? -1 : result
    }
}

