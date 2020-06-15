const express = require('express')
const app = express()
//const bodyParser = require('body-parser')

//-------------------------- ข้อ 1-2 ----------------------------//

// 1.Return the Bad input (400) response code if the input number is not even. 
//(in this case, it is 3) thus it is return 400 response code.
//2.Return the Success (200) response code if the input number is a even.
app.get('/:id' , (req,res)=> {
    if (Number(req.params.id) % 2 !== 0) {
    res.sendStatus(400)
    }
    else {
    res.sendStatus(200)
    }
})


//-------------------------- ข้อ 3-6 ----------------------------//
//POST /number/1 for saving a input number, return the all saved numbers as a JSON array. For example
//POST /number/1 -> [1]
//POST /number/2 -> [1,2]
///POST /number/5 -> [1,2,5]
//app.use(bodyParser.urlencoded({extended: true})); 

let myJSON1 = {"number" : { "id" : []}}

app.post('/number/:num', (req,res)=> {
    //res.send(`your start Array ${myJSON.number.id}`)
    myJSON1.number.id.push(parseInt(req.params.num))
    res.send(`This is your current Array [${myJSON1.number.id}]`)
})


//-------------------------- ข้อ 7-9 ----------------------------//
//7.DELETE /number/1, remove the number in the array
//8.DELETE /number/1 -> [2,5]
//9.DELETE /number/2 → [5]

let myJSON2 = {"number" : { "id" : [1,2,5]}}
let myArr2 = myJSON2.number.id

app.delete('/number/:num', (req,res)=> {    
    myArr2 = myArr2.filter ( x => x !==(parseInt(req.params.num)))
    res.send(`This is your current Array [${myArr2}]`)
})


//-------------------------- ข้อ 10-11 ----------------------------//
// 10.PUT /number/5/10, change the number in the array
// 11.PUT /number/5/10 -> [10]
const myArr3 = [1,2,5]
app.put('/number/:num1/:num2' , (req,res)=> {

    const myArr4 = myArr3.map ( x => {
    if (x ===(parseInt(req.params.num1))) {
    return x = (parseInt(req.params.num2))
    } else {
       return x 
    }
    })
    res.send(`This is your current Array [${myArr4}]`)
})



//-------------------------- ข้อ 12-14 ----------------------------//
// 12.POST /countFields for counting the number of fields that submit 
// via req.body (raw as the JSON object) for example,
// 13.POST /countFields BODY {“a”:1,”b”:2,”c”:3} -> 3
// 14.POST /countFields BODY {“a”:1,”b”:2,”c”:3,”d”:5} -> 4

app.post('/countFields/:ob' , (req,res)=> {
    let objBody = req.params.ob  //รับมาเป็น String นะฮะ
    //res.send(`${objBody}`)
    //res.send(`${typeof(objBody)}`)
    //console.log(objBody);
     
    let JSONBody = JSON.parse(objBody) //แปลงเป็น object 
    //res.send(`${typeof(JSONBody)}`)

    let count = 0
    for (let key in JSONBody) {
     if (JSONBody.hasOwnProperty(key)) {
         count++
        }
    }
    res.send(`Here you count ${count}`)
})

app.listen(3000 , () => console.log("Server Start"))