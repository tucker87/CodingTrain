const c = window.CryptoJS

class Item {
    constructor(timestamp, data, index) {
        this.index = index
        this.timestamp = timestamp
        this.data = data
        this.previousHash = "0"
        this.hash = this.calculateHash()
        this.kills = {}
    }

    static kill(key, item) {
        item.kills[key] = 1 + item.kills[key] || 0
    }

    calculateHash() {
        return c.SHA256(`${this.index}${this.previousHash}${this.timestamp}${JSON.stringify(this.data)}`).toString()
    }
}

export default Item