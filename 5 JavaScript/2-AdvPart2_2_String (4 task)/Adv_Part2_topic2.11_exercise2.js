function checkSpam(string) {
    
    let xxx = string.indexOf('xxx');
    let viagra = string.indexOf('viagra');

    if ( xxx !== -1 || viagra !== -1) {
        return true ;
    }
    else {
        return false ;
    }

}


/* Another Solution 

function checkSpam(string) {
  let spam = ["xxx", "viagra"];
  for (let word of spam) {
    if (string.includes(word)) return true;
  }
  return false;
}
*/