class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const graph = Array.from({ length: numCourses }, () => [])
        const ingreed = Array.from({ length: numCourses }, () => 0)

        for (const [a, b] of prerequisites) {
            graph[b].push(a)
            ingreed[a]++
        }
        const queue = []
        for (let index = 0; index < ingreed.length; index++) {
            if (ingreed[index] === 0) {
                queue.push(index)
            }
        }
        let head = 0
        let learned = 0
        while (head < queue.length) {
            const cur = queue[head++]
            learned++
            for (const next of graph[cur]) {
                ingreed[next]--
                if (ingreed[next] === 0) {
                    queue.push(next)
                }
            }
        }

        return learned === numCourses
    }
}
