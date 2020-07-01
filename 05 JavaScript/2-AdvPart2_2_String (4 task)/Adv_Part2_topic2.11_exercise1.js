function ucFirst(string){


    let STRING = string.toUpperCase();

    let lower = string.slice(1);
    let transform = STRING[0] + lower ;

    return transform;
}