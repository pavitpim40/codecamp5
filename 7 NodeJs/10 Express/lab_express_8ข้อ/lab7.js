const express = require('express')
const app = express()



app.get('/static' , (req,res)=>{
    res.send('Hello World')
})
app.get('/staticJSON' , (req,res)=>{
    res.json({ text:'Hello World'})
})
app.get('/echo' , (req,res)=>{
    res.send(req.query.text)
})
app.get('/plus' , (req,res)=>{
    let a = Number(req.query.a)
    let b = Number(req.query.b) 
    console.log(a);
    console.log(b);
    let sum = a + b
    res.send(`${sum}`)
})
app.get('/plusByJSON' , (req,res)=>{
    let myJSON = JSON.parse(req.query.jsonText)
    let a = Number(myJSON.a)
    let b = Number(myJSON.b)
    console.log(`${myJSON}:${a} : ${b}`);
    let sum = a+b
    res.send(`${sum}`)
})
app.get('/plus/:first/:second' , (req,res)=>{
    let a = parseInt(req.params.first)
    let b = parseInt(req.params.second)
    let sum = a+b
    res.send(`${sum}`)
})
app.get('/checkEvenNumber/:num' , (req,res)=>{
    if ( Number(req.params.num) % 1 !== 0) res.send("Not integer")
    else if ( Number(req.params.num) % 2 === 0) res.send("even number")
    else res.send("Odd number")
})


app.listen(3000 , console.log('Server Start..'))