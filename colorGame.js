var nums = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorsDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
init();
function init()
{
    setModeButton();
    setSquares();
    reset();
}
function setModeButton()
{
    for(var i=0;i<modeButtons.length;i++)
    {
    modeButtons[i].addEventListener("click", function()
    {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        if(this.textContent === "Easy")
        {
            nums = 3;
        }
        else{
            nums = 6;
        }
        reset();
    });
    }
}
function setSquares()
{
    for(var i=0 ; i < squares.length ; i++)
{
    squares[i].addEventListener("click", function()
    {
        var clickedColor = this.style.background;
        if(clickedColor === pickedColor)
        {
            messageDisplay.textContent = "Correct";
            resetButton.textContent = "Play Again?";
            changeColor(clickedColor);
            h1.style.background = clickedColor;
        }
        else{
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}
}
function reset()
{
    colors = generateRandomColor(nums);
    pickedColor = pickColor();
    colorsDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    for(var i=0 ; i < squares.length ; i++)
{
    if(colors[i])
    {
    squares[i].style.display = "block";
    squares[i].style.background = colors[i];
    }
    else{
        squares[i].style.display = "none";
    }
}
    h1.style.background = "steelBlue";
}
resetButton.addEventListener("click", function()
{
   reset();
});
function changeColor(color)
{
    for(var i=0 ; i < squares.length ; i++)
    {
        squares[i].style.background = color;
    }
}
function pickColor()
{
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateRandomColor(num)
{
    var arr = [];
    for(var i=0;i<num;i++)
    {
        arr.push(randomColor());
    }
    return arr;
}
function randomColor()
{
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}