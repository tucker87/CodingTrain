import Item from './Item.js'

class ItemChain {
    constructor() {
        this.chain = [this.createGenesis()];
    }

    getItems() {
        let items = []
        for (let i = this.chain.length - 1; i >= 1; i--) {
            if(items.filter(item => item.index === this.chain[i].index).length > 0)
                continue

            var dataClone = JSON.parse(JSON.stringify(this.chain[i].data))
            var flat = {...dataClone, index: this.chain[i].index }
            var newItem = Object.assign({}, flat)
            items.push(newItem)
        }
        return items.sort((a, b) => a.index - b.index)
    }

    createGenesis() {
        return new Item("01/01/2017", { name: "genesis" })
    }

    latestItem() {
        return this.chain[this.chain.length - 1]
    }

    addItem(data) {
        let d = new Date()
        let timeStamp = `${d.getFullYear()}\\${d.getMonth()}\\${d.getDate()}`
        let newItem = new Item(timeStamp, data, data.index)
        newItem.previousHash = this.latestItem().hash
        newItem.hash = newItem.calculateHash()
        this.chain.push(newItem)
    }

    checkValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentItem = this.chain[i]
            const previousItem = this.chain[i - 1]

            if (currentItem.hash !== currentItem.calculateHash()) {
                return false
            }

            if (currentItem.previousHash !== previousItem.hash) {
                return false
            }
        }

        return true;
    }
}

export default ItemChain