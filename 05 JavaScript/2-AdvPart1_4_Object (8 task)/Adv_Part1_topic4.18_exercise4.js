let salaries = {

    John : 100,
    Ann : 160,
    Pete : 130,
}


function sum(obj){

    let Total = 0;

    for(key in obj){

        Total += obj[key];
    }

    return Total;
}

sum(salaries);