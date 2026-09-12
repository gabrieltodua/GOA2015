let A_a = document.getElementById("A_a")
let B_b = document.getElementById("B_b")
let C_c = document.getElementById("C_c")
let D_d = document.getElementById("D_d")


let sub = document.getElementById("sub")

let Answer = ""

A_a.addEventListener("click" , function() {
    Answer = A_a.innerText
    console.log(Answer)
})

B_b.addEventListener("click" , function() {
    Answer = B_b.innerText
    console.log(Answer)
})

C_c.addEventListener("click" , function() {
    Answer = C_c.innerText
    console.log(Answer)
})

D_d.addEventListener("click" , function() {
    Answer = D_d.innerText
    console.log(Answer)
})


sub.addEventListener("click" , function() {
    if (Answer === B_b.innerText) {
        window.open("py3.html");
    } else {
        alert("Wrong")
    }
})