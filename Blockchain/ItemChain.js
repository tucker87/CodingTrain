import Item from './Item.js'

class ItemChain {
    constructor() {
        this.chain = [this.createGenesis()];
    }

    getItems() {
        let items = []
        for (let i = 1; i < this.chain.length; i++) {
            items.push({...this.chain[i].data})
        }
        return items;
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
        let newItem = new Item(timeStamp, data)
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