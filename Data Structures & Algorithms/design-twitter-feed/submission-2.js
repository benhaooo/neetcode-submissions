
let t = 0
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

class User {
    constructor(id) {
        this.id = id
        this.posts = []
        this.following = new Set()
    }

    post(pid) {
        this.posts.push({
            id: pid,
            t
        })
        t++
    }
    follow(user) {
        this.following.add(user)
    }
    unfollow(uid) {
        this.following.delete(uid)
    }
}

class Twitter {
    constructor() {
        this.users = new Map()
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        this.#get_user(userId).post(tweetId)
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        const heap = new Heap((a, b) => a.t - b.t)
        const user = this.#get_user(userId)
        for (const followee of [...user.following, user]) {
            for (const post of followee.posts) {
                heap.push(post)
                if (heap.size > 10) {
                    heap.pop()
                }
            }
        }
        const result = []
        while (heap.size) result.unshift(heap.pop().id)
        return result
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        const follower = this.#get_user(followerId)
        const followee = this.#get_user(followeeId)
        follower.follow(followee)
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        const follower = this.#get_user(followerId)
        const followee = this.#get_user(followeeId)
        follower.unfollow(followee)
    }

    #get_user(uid) {
        if (this.users.has(uid)) {
            return this.users.get(uid)
        }
        const user = new User(uid)
        this.users.set(uid, user)
        return user
    }
}
