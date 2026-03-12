// 2)

let textElement = document.getElementById("text");

function changeText() {
    textElement.innerHTML = "changed by js";
}


function resetText() {
    textElement.innerHTML = "Original text";
}


// 3)

let imageElement = document.getElementById("image");

function changeImage() {
    imageElement.src = "img2.png";
}

function resetImage() {
    imageElement.src = "img1.png";
}