// original File อยู่ใน Snippet

let url = 'https://covid19.th-stat.com/api/open/today'
let dt

fetch(url).then (res => res.json()).then(data => {
    dt = data
    console.log(data)
}).catch( err => console.error(err))

//.then แรกจะได้ objectแรก ออกมาเป็น JSON -- มันจึงเอาไป .then ต่อได้
// .then ตัวที่ 2 เอา data มาใช้ 