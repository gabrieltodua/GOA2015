// 1

let p = document.getElementById("myp");

p.innerHTML = "ეს არის ახალი ტექსტი";







// 2

let h1 = document.getElementById("myh1");

let button = document.getElementById("colorbutton");


function color() {

    h1.style.color = "red";

}






// 3

let div = document.getElementById("mydiv");

let bgcolorbutton = document.getElementById("bgcolorbutton");


function bgcolor() {

    div.style.backgroundColor = "green";

}







// 4

let myfont = document.getElementById("myfont");

let fontsizebutton = document.getElementById("fontsizebutton");


function fontsize() {

    myfont.style.fontSize = "30px";

}







// 5

let myclass = document.getElementsByClassName("myclass");

myclass[0].innerHTML = "ეს არის შეცვლილი ტექსტი 1";

myclass[1].innerHTML = "ეს არის პარაგრაფი 2";

myclass[2].innerHTML = "ეს არის პარაგრაფი 3";




