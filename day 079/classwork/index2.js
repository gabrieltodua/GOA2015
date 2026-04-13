// 2)


let p = document.getElementById("p_main");

function plus() {
    p.textContent = Number(p.textContent) + 1;
}

function minus() {
    p.textContent = Number(p.textContent) - 1;
}
function check() {
    if (p.textContent === "0") {
        p.style.color = "red";
    } else if (p.textContent > "0") {
        p.style.color = "green";
    }
}

setInterval(check, 100);




// 3)

let p_color = document.getElementById("color_value");

let block = document.getElementById("color_block");

function changeColor() {

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let color = "rgb(" + r + "," + g + "," + b + ")";

    block.style.backgroundColor = color;
    p_color.textContent = color;

}