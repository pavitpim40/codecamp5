
let ask = (question, yes , no) => {
    if (confirm(question)) yes() ;
    else no(); 
}

let showAgree = () => alert("You agreed.");
let showCancel = () => alert("You canceled the execution.");

ask (
    "Do you agree?" , showAgree
     , showCancel
)


// let ask = (question, yes , no) => {
//     if (confirm(question)) yes() ;
//     else no(); 
// }

 
// ask (
//     "Do you agree?" , () => alert("You agreed.")
//      , () => alert("You canceled the execution.")
// )