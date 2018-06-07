let t = v => {
    if(typeof v === 'string')
        return document.querySelector(v)

    if(typeof v === 'function')
        document.addEventListener('DOMContentLoaded', v)
}
t.fetchJson = url => fetch(url).then(r => r.json())
HTMLElement.prototype.on = HTMLElement.prototype.addEventListener

export default t