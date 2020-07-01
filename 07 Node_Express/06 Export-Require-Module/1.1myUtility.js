
var pi = 3.14
const user = {name : 'John' , age:30}

exports.getRd =  (min=0,max=99) => Math.floor (Math.random() * (max-min)) + min 
module.exports.circleArea = function circleArea(r) {
    return pi * r ** 2
}

module.exports.pi = pi
//module.exports.getRd = getRandom
module.exports.user = user