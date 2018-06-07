const c = window.CryptoJS

class Item {
    constructor(timestamp, data) {
        this.index = 0
        this.timestamp = timestamp
        this.data = data
        this.previousHash = "0"
        this.hash = this.calculateHash()
    }

    calculateHash() {
        return c.SHA256(`${this.index}${this.previousHash}${this.timestamp}${JSON.stringify(this.data)}`).toString()
    }
}

export default Item