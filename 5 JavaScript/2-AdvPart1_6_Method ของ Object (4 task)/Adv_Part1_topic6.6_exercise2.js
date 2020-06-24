function makeUser(){

    return {
        name : "john",
        ref : this 
    };

};

let user = makeUser();


//แสดงผลเป็น undefined