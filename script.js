var btn = document.getElementById("btn")
var body = document.querySelector("body")
var colorName = document.getElementById("color")

var color = ["red","yellow","crimson","rgb(134,79,150)","purple"]

var hex = ["1","2", "3", "4","5","6","7","8","9","0","A","B","D","C","F","E",]
var hexColor = "#"


btn.addEventListener("click",(e)=>{
    var newHexColor = getRandomHEXColor()
colorName.innerHTML= newHexColor;
body.style.background = newHexColor;
    
})
function getRandomHEXColor(){
    hexColor = "#"
    for(var i=0;i<6;i++){
     var random = Math.floor(Math.random()*hex.length)
     hexColor = hexColor+hex[random]
} 
    console.log(hexColor)
return hexColor;
}