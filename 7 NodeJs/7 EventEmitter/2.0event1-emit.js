const EventEmitter = require('events') 

class Em1 extends EventEmitter{
    emit1 () {
        setInterval(() => this.emit('one sec',111111), 1000)
    }
    emit2 () {
        setInterval(() => this.emit('two sec',222222), 2000)
    }
}


module.exports = Em1