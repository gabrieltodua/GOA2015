let html = document.body;

// 0

let div1 = document.createElement("div")
div1.textContent = "მე ვარ კონტეინერი"







// 1



let ul = document.getElementById("myList");



let li1 = document.createElement("li");

li1.textContent = "ელემენტი 1";



let li2 = document.createElement("li");

li2.textContent = "ელემენტი 2";



let li3 = document.createElement("li");

li3.textContent = "ელემენტი 3";






// 3

let a = document.createElement("a")

a.textContent = "გადადი facebook-ზე"


a.href = "https://www.facebook.com/"





// 4

let position = 0

const box1 = document.getElementById("box1")

function move1() {

    box1.style.left = position + "px"

    if (position >= 150){

        position = 0
    }

    position += 1
}

setInterval(move1, 1)





let position1 = 0

const box2 = document.getElementById("box2")

function move2() {

    box2.style.top = position1 + "px"

    if (position1 >= 200){

        position1 = 0
    }
    position1 += 1 
}

setInterval(move2, 1)






window.onload = function() {

    html.appendChild(div1)

    ul.appendChild(li1);

    ul.appendChild(li2);

    ul.appendChild(li3);
    
    html.appendChild(a)

}