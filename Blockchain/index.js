import ItemChain from './ItemChain.js'
import Item from './Item.js'


let chain = new ItemChain();
chain.addItem({name: 'Some Sword', kills: {}, index: 0});
chain.addItem({name: 'A Better Sword', kills: {}, index: 1 });

let app = new Vue({
    el: "#main",
    methods: {
        killUndead: item => {
            new Item().kill("undead", item)
            chain.addItem(item)
            app.$forceUpdate()
        },
        items: () => chain.getItems()
    }
})

window.app = app
window.chain = chain

export default app