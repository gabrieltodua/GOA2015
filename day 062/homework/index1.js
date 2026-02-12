let inp = document.getElementById("inp_m");
let text = document.getElementById("p_m1");

function sub() {

    let helper = inp.value;   
    let count = 0;

    for (let i of helper) {
        if (i === "@") {
            count++;
        }
    }

    if (count === 1) {
        text.innerHTML = "Successful!";
        text.style.color = "green";
        alert("successful !!!");
    } else {
        text.innerHTML = "Please provide a valid email address !!!";
        text.style.color = "red";
        alert("unsuccessful !!!");
    }
}
