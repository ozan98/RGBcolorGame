var numberofSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init()

function init(){
    setuoModeButton();
    setupSquares();
    reset();
}

function setuoModeButton(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
    
            this.textContent === "Easy" ? numberofSquares = 3 : numberofSquares = 6;
            reset()
        })
    }

}

function setupSquares(){
    for(var i = 0; i < squares.length; i++){

        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
    
            if(clickedColor == pickedColor){
                messageDisplay.textContent = "Correct";
                changeColor(pickedColor);
                h1.style.background = clickedColor;
                resetButton.textContent = "Play Again";
            }else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "try again";
            }
        })
    }

}


function reset(){
    colors = generateRandomColors(numberofSquares);
    pickedColor =  pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors"
    messageDisplay.textContent = null;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
            }else{
                 squares[i].style.display = "none";
            }
    }
    h1.style.background = "steelblue";
}

resetButton.addEventListener("click", reset);


function changeColor(color){
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }

}

function pickColor(){
   var random = Math.floor(Math.random() * colors.length);
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