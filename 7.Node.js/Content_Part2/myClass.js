const mu = require('./myUtility')

class Human {
    constructor( name, age = mu.getRd(20,50)) {
        this.name = name
        this.age = age 
    }
    info() { console.log(this.name, this.age)}
}

exports.Human = Human

