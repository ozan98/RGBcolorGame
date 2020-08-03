var colors = generateRandomColors(6);
var pickedColor =  pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;

        if(clickedColor == pickedColor){
            messageDisplay.textContent = "Correct";
            changeColor(pickedColor);
            h1.style.background = clickedColor;
        }else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "try again";
        }
    })
}

function changeColor(color){
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }

}

function pickColor(){
   var random = Math.floor(Math.random() * colors.length) + 1;
   return colors[random];
}

function generateRandomColors(num){
    var arr = [];
    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
    

}

function randomColor(){
    var r = Math.floor(Math.random() * 255 + 1);
    var g = Math.floor(Math.random() * 255 + 1);
    var b = Math.floor(Math.random() * 255 + 1);

    return "rgb("+r+", "+ g+", " +b+")";

}