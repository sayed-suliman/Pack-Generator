var range = document.querySelector("#myRange")
range.addEventListener("mousemove",function(){
    var x = range.value
    var color = `linear-gradient(90deg,rgb(244, 244, 244) ${x}%,var(--color-primary-lighter-blue)${x}%)`
    range.style.background = color
})