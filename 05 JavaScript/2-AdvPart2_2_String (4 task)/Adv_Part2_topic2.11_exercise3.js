function truncate(str, maxlength){

    if (str.length > maxlength) {
    
        str = str.slice(0,maxlength) + "...";
        console.log(str);

    }
    else {
        console.log(str);
    }


}