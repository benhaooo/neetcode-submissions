class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        let arr = this.keyStore.get(key);
        if (!arr) {
            arr = new Array();
            this.keyStore.set(key, arr);
        }
        arr.push({
            value,
            timestamp,
        });
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const arr = this.keyStore.get(key) || [];
        let left = 0;
        let right = arr.length;
        while (left < right) {
            const mid = left + Math.floor((right - left) / 2);
            if (arr[mid].timestamp <= timestamp) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        if (arr[left - 1]) return arr[left - 1].value;
        return "";
    }
}
