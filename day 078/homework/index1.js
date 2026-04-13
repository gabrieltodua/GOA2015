// 1
// 5) შემქენით div. როდესაც ამ div გადავუვლით მაუსით ეს div გაწითლდეს და როდესაც გამოვწევთ მაუს გაყვითლდეს 

let div = document.getElementById("div")

div.addEventListener("mouseover", function() {
    div.style.backgroundColor = "red"
})

div.addEventListener("mouseout", function() {
    div.style.backgroundColor = "blue"
})