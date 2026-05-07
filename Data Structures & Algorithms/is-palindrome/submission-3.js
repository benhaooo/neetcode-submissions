class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;
        const isAlphanumeric = (char) => {
            if (
                (char >= "a" && char <= "z") ||
                (char >= "A" && char <= "Z") ||
                (char >= "0" && char <= "9")
            ) {
                return true;
            }
            return false;
        };
        while (left <= right) {
            while (left < right && !isAlphanumeric(s[left])) {
                left++;
            }
            while (left < right && !isAlphanumeric(s[right])) {
                right--;
            }
            if (s[left++].toLowerCase() !== s[right--].toLowerCase()) {
                return false;
            }
        }

        return true;
    }
}
