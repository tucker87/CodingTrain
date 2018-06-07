import ItemChain from './ItemChain.js'
import Item from './Item.js'


let chain = new ItemChain();
chain.addItem({name: 'Some Sword', kills: {} });
chain.addItem({name: 'A Better Sword', kills: {} });

let app = new Vue({
    el: "#main",
    data: {
        items: chain.getItems()
    },
    methods: {
        add: name => items.push({name}),
        killUndead: item => console.log(item)
    }
})

window.app = app
window.chain = chain

export default app