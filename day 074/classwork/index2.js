// 2

let div = document.getElementById("box")

let green = document.getElementById("green")

let red = document.getElementById("red")

let blue = document.getElementById("blue")

red.addEventListener("click", function(){
    div.style.backgroundColor = "red"
})

blue.addEventListener("click", function(){
    div.style.backgroundColor = "blue"
})


green.addEventListener("click", function(){
    div.style.backgroundColor = "green"
})


// 3

let img1_b = document.getElementById("img1")


let img2_b = document.getElementById("img2")
let img2 = document.getElementById("image1.png")

let Nothing_b = document.getElementById("Nothing")

let img = document.getElementById("main_img")

img1_b.addEventListener("click", function(){
    img.src = "image1.png"
})

img2_b.addEventListener("click", function(){
    img.src = "image2.png"
})

Nothing_b.addEventListener("click", function(){
    img.src = ""
})