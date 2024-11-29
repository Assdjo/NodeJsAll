const { log } = require('console')
const Eventemitter = require('events')
let id =1
const event = new Eventemitter()
const Mycallback = ()=>{

    log(`je suis au nombre ${id++}`)
    
}
event.on('celebration', Mycallback)

event.emit('celebration')
