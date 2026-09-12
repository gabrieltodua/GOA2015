

let star1 = document.getElementById("star1");
let star2 = document.getElementById("star2");
let star3 = document.getElementById("star3");
let star4 = document.getElementById("star4");
let star5 = document.getElementById("star5");
let rate = document.getElementById("rate_main");


function rate1() {

    star1.style.backgroundColor = "hsl(0, 0%, 100%)";
    star2.style.backgroundColor = "hsl(217, 12%, 63%)";
    star3.style.backgroundColor = "hsl(217, 12%, 63%)";
    star4.style.backgroundColor = "hsl(217, 12%, 63%)";
    star5.style.backgroundColor = "hsl(217, 12%, 63%)";   


}

function rate2() {

  star1.style.backgroundColor = "  hsl(217, 12%, 63%";
  star2.style.backgroundColor = "hsl(0, 0%, 100%)";
  star3.style.backgroundColor = "hsl(217, 12%, 63%)";
  star4.style.backgroundColor = "hsl(217, 12%, 63%)";
  star5.style.backgroundColor = "hsl(217, 12%, 63%)";

}



function rate3() {
    star1.style.backgroundColor = "hsl(217, 12%, 63%)";
    star2.style.backgroundColor = "hsl(217, 12%, 63%)";
    star3.style.backgroundColor = "hsl(0, 0%, 100%)";
    star4.style.backgroundColor = "hsl(217, 12%, 63%)";
    star5.style.backgroundColor = "hsl(217, 12%, 63%)";
    rate.innerHTML = "You selected 3 out of 5";
}


function rate4() {
    star1.style.backgroundColor = "hsl(217, 12%, 63%)";
    star2.style.backgroundColor = "hsl(217, 12%, 63%)";
    star3.style.backgroundColor = "hsl(217, 12%, 63%)";
    star4.style.backgroundColor = "hsl(0, 0%, 100%)";
    star5.style.backgroundColor = "hsl(217, 12%, 63%)";
    rate.innerHTML = "You selected 4 out of 5";
}


function rate5() {
    star1.style.backgroundColor = "hsl(217, 12%, 63%)";
    star2.style.backgroundColor = "hsl(217, 12%, 63%)";
    star3.style.backgroundColor = "hsl(217, 12%, 63%)";
    star4.style.backgroundColor = "hsl(217, 12%, 63%)";
    star5.style.backgroundColor = "hsl(0, 0%, 100%)";
    rate.innerHTML = "You selected 5 out of 5";
}


