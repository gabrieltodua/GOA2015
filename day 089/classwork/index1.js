let inp = document.getElementById("inp");
let valid = document.getElementById("valid");
let button = document.getElementById("sub_main");
let d_b = document.getElementById("d_b");
let em_t = document.getElementById("em_t");

button.addEventListener("click", function () {

    let val = inp.value;

    if (val === "") {
        valid.innerText = "Not valid";
        valid.style.color = "red";
        inp.style.borderColor = "red";
    }

    else if (val.includes("@")) {
        valid.innerText = "Valid";
        valid.style.color = "green";
        inp.style.borderColor = "green";
        window.open("index2.html" , "_blank")
    }

    else {
        valid.innerText = "Not valid";
        valid.style.color = "red";
        inp.style.borderColor = "red";
    }

});

function back() {
    window.open("index1.html" , "_blank");
}

