function changeColor () {
    // alert("Change Color Function....");
    let tColor = document.querySelector('#in1').value;
    let bColor = document.querySelector('#in2').value;
    // alert(tColor)
    // alert(bColor)
    document.querySelector('h2').style.color = tColor;
    document.querySelector('h2').style.backgroundColor = bColor;
}