import ItemChain from './ItemChain.js'
import Item from './Item.js'


let chain = new ItemChain();
chain.addItem({name: 'Some Sword'});
chain.addItem({name: 'A Better Sword'});

console.log(JSON.stringify(chain, null, 4));
console.log("Is chain valid? " + chain.checkValid());



let app = new Vue({
    el: "#main",
    data: {
        items: chain.getItems()
    },
    methods: {
        add: name => items.push({name})
    }
})

window.app = app
window.chain = chain

export default app