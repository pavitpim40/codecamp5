let map = new Map();
console.log(map);

map.set("name", "John");
console.log(map);

let keys = map.entries();
console.log(keys);

let keysArray = []
for(let somevar of keys){
    keysArray.push(somevar);
}
keys = keysArray;
// Error: keys.push is not a function
keys.push("more");
