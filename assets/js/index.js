// for range
var range = document.querySelector("#myRange")
range.addEventListener("mousemove",function(){
    var x = range.value
    var color = `linear-gradient(90deg,rgb(244, 244, 244) ${x}%,var(--color-primary-lighter-blue-alpha)${x}%)`
    range.style.background = color
})
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
