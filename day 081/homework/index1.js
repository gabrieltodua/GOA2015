// 0
let colorBox = document.getElementById("colorBox");

let colorButton = document.getElementById("colorButton");


function getRandomColor() {

    let r = Math.floor(Math.random() * 256);

    let g = Math.floor(Math.random() * 256);

    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}


function changeBoxColor() {

    let randomColor = getRandomColor();

    colorBox.style.backgroundColor = randomColor;

}


colorButton.addEventListener("click", function() {

    setInterval(changeBoxColor, 1000);

});


// 1



// 2

let position = 0

const box = document.getElementById("box")

function move() {
    box.style.left = position + 'px'

    if (position >= 300){
        position = -10
    }
    position += 1


}

setInterval(move, 1)

// 3

let count = 0

const counter = document.getElementById("counter")

function increase() {
    if (count === 100) {

        count = 0
    }

    count += 1

    counter.textContent = count

}

setInterval(increase, 100)


// 4

let shakeButton = document.getElementById("shakeButton")

let shakeBox = document.getElementById("shakeBox")

function shake() {

    let randomX = Math.floor(Math.random() * 100) 

    let randomY = Math.floor(Math.random() * 100) 

    shakeBox.style.transform = `translate(${randomX}px, ${randomY}px)`

}


shakeButton.addEventListener("click", function() {

    setInterval(shake, 100)

})


