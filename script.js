var square = document.querySelectorAll(".square");
var colorTitle = document.querySelector(".pickedColor");
var message = document.getElementById("message");
var h1 = document.querySelector("h1")
var resetBtn = document.getElementById("reset")
var modeBtn = document.querySelectorAll("#mode")

var color = [];
var pickedColor;
var numSquares = 6;

init();

function init() {
    setupModeButtons()
    setupSquares()
    reset()
}

function setupModeButtons() {
    for (var i = 0; i < modeBtn.length; i++) {
        modeBtn[i].addEventListener("click", function () {
            modeBtn[0].classList.remove("selected")
            modeBtn[1].classList.remove("selected")
            this.classList.add("selected")
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset()
        })
    }
}

function setupSquares() {
    for (var i = 0; i < square.length; i++) {
        square[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor
            if (pickedColor === clickedColor) {
                resetBtn.textContent = "Play Again?"
                message.textContent = "Correct"
                changeColors(clickedColor)
                h1.style.backgroundColor = clickedColor
            } else {
                this.style.backgroundColor = "#232323"
                message.textContent = "Try again"
            }
        })

    }
}

function reset() {
    color = randomColorGenerator(numSquares);
    pickedColor = ColorPick()
    colorTitle.textContent = pickedColor
    resetBtn.textContent = "New Colors"
    message.textContent = ""
    h1.style.backgroundColor = "steelblue"
    for (var i = 0; i < square.length; i++) {
        if (color[i]) {
            square[i].style.display = "block"
            square[i].style.backgroundColor = color[i]
        } else {
            square[i].style.display = "none"
        }
    }
}



resetBtn.addEventListener("click", function () {
    reset()
})





function changeColors(clickedColor) {
    for (var i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = clickedColor;
    }
    h1.style.backgroundColor = clickedColor;
}


function ColorPick() {
    var random = Math.floor(Math.random() * color.length) //picks a random index in the color array
    return color[random]
}

function randomColorGenerator(length) {
    var arr = []
    for (var i = 0; i < length; i++) {
        arr.push(randomRGB())
    }
    return arr
}

function randomRGB() {
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")"
}