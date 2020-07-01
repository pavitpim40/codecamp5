// original File อยู่ใน Snippet

let url = 'https://covid19.th-stat.com/api/open/today'
let d

function addTag(label, content) {
    let p = document.createElement('p')
    p.innerText = `${label} : ${content}`
    document.body.appendChild(p)
}

(async () =>{
try {
    const resp = await fetch(url)
    const data = await resp.json()
    d = data
    
    for (let key in d ) {
    addTag(key, d[key])
    }
        
}catch(err) { 
    console.error(err)
}
})()


