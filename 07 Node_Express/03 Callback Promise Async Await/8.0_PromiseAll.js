// Promise all 

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function pmRandom () {
    return new Promise( (rs,rj) => {
        let n = getRandom(1,9)
        if (n < 7) rs(n)
        else rj(n)
    })
}

const pm1 = pmRandom() 
const pm2 = pmRandom() 
const pm3 = pmRandom() 


Promise.all([ pm1, pm2, pm3])
.then( rs => {
    console.log("Pass all");
    console.log(rs);
}).catch( rj => {
    console.log("Not Pass");
    console.log(rj);
} )


