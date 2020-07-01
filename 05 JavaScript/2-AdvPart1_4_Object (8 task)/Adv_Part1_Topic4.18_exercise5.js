let menu = {
    width : 200,
    height : 300,
    title : "My menu"

};


function multiplyNumeric (obj, times){


    for (let key in obj){
        if (typeof obj[key] === "number"){
        obj[key] *= times
    }
    }
    
    return obj;

}

    multiplyNumeric(menu,2);
console.log(menu);

multiplyNumeric(menu);
console.log(menu);