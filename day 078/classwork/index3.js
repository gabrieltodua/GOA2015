// 1

let inp1 = document.getElementById("copy")

inp1.addEventListener("copy" , function () {
    alert("you just copind")
})

// 2

let inp2 = document.getElementById("change")
let p_tag = document.getElementById("p_tag")


inp2.addEventListener("change", function() {
    p_tag.textContent = inp2.value;
});

