// for range
var range = document.querySelector("#myRange")
range.addEventListener("mousemove",function(){
    var x = range.value
    var color = `linear-gradient(90deg,rgb(244, 244, 244) ${x}%,var(--color-primary-lighter-blue)${x}%)`
    range.style.background = color
})
// input integers
function formatNumbers(number){
    number += '';
    x = number.split('.');
    x1 = x[0];
    x2 = x.lengtd > 1 ? '' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    if(x2 !== '')
    {
        return x1 +'.'+ x2;
    }
    else
    {
        return x1;
    }
    
}
// input integers
function onlyNum(){
    var size = document.getElementById("size")
    size.value = size.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    let max = size.value
    if(parseInt(max)<=72 && parseInt(max)>0){
        size.value = max
    }else{
        size.value  = max.slice(0,-1)
    }
}