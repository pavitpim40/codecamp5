//###### Code นี้แสดงผลถูกต้อง

console.log('a');
new Promise ( rs => {
    setTimeout( () => {
    console.log('b')
    rs()
    },1000)
}).then ( ( ) => {
    new Promise ( rs => {
    setTimeout (()=> {
        console.log('c');
        rs();
    } ,1000 )
    }).then (() => { 
    setTimeout(() => console.log('d') , 1000 )
})
})