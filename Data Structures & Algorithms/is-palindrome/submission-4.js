class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isPalindrome(s) {
        const cleaned = s
            .replaceAll(" ", "")
            .split("")
            .map((i) => i.toLowerCase())
            .filter((i) => (i >= "0" && i <= "9") || (i >= "a" && i <= "z"));
        return cleaned.join("") === cleaned.reverse().join("");
    }
}
