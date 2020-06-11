
var pi = 3.14
function getRandom(min,max){
return Math.floor (Math.random() * (max-min)) + min 
}

function circleArea(r) {
    return pi * r ** 2
}

module.exports.pi = 3.14
module.exports.getRd = getRandom
module.exports.circleArea = circleArea