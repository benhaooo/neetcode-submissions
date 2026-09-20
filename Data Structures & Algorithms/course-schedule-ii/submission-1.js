class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const graph = Array.from({ length: numCourses }, () => [])
        const ingreed = Array.from({ length: numCourses }, () => 0)

        for (const [a, b] of prerequisites) {
            graph[b].push(a)
            ingreed[a]++
        }
        const queue = []
        for (let index = 0; index < ingreed.length; index++) {
            const element = ingreed[index];
            if (element === 0) {
                queue.push(index)
            }

        }
        let head = 0
        let learned = 0
        const result = []
        while (head < queue.length) {
            const cur = queue[head++]
            learned++
            result.push(cur)
            for (const next of graph[cur]) {
                ingreed[next]--
                if (ingreed[next] === 0) {
                    queue.push(next)
                }
            }
        }

        return result.length === numCourses ? result : []

    }
}
