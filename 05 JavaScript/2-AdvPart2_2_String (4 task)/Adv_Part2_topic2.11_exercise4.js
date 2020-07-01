function extractCurrency (string, rate){

    string = + string.slice(1);
    return string*rate ; 
}