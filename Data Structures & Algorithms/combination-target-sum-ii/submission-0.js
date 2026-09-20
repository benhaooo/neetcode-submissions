class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const result = []
        const path = []
        const candcandidatesidates = candidates.sort()
        const combination = (index, sum) => {
            if (sum > target) return
            if (sum === target) {
                result.push([...path])
                return
            }

            for (let i = index; i < candcandidatesidates.length; i++) {
                const value = candcandidatesidates[i]
                if (i > index && value === candcandidatesidates[i - 1]) continue
                path.push(value)
                combination(i + 1, sum + value)
                path.pop(value)
            }
        }
        combination(0, 0)

        return result
    }
}
