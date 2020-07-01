function dropBall (before,after) {
    before()
    console.log('catch ball');
    console.log('release');
    after();
}

function kickBall(){
    console.log('kickball');
}

function buyBall() {
    console.log('buy ball');
}

dropBall(buyBall,kickBall)