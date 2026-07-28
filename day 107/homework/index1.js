let card_number_dysplay = document.getElementById("card_number")
let name_dysplay = document.getElementById("name")
let datayher_dysplay = document.getElementById("datayher")
let cvc_dysplay = document.getElementById("cvc")

let nameinput = document.getElementById("nameinput")
let cardinput = document.getElementById("cardinput")
let mm = document.getElementById("mm")
let yy = document.getElementById("yy")
let cvcinput = document.getElementById("cvcinput")

let namespan = document.getElementById("namespan")
let cardnumberspan = document.getElementById("cardnumberspan")
let mmspan = document.getElementById("mmspan")
let yyspan = document.getElementById("yyspan")
let cvcspan = document.getElementById("cvcspan")

let diva = document.getElementById("start")
let divt = document.getElementById("done")

let submit1 = document.getElementById("submit1")
let submit2 = document.getElementById("submit2")

let validname = 0
let validcardnumber = 0
let validmm = 0
let validyy = 0
let validcvc = 0

name_dysplay.innerHTML = localStorage.getItem("saved_name")
card_number_dysplay.innerHTML = localStorage.getItem("saved_card")
datayher_dysplay.innerHTML = localStorage.getItem("saved_mm") + "/" + localStorage.getItem("saved_yy")
cvc_dysplay.innerHTML = localStorage.getItem("saved_cvc")

nameinput.addEventListener("input", function () {
    name_dysplay.innerHTML = nameinput.value
})

cardinput.addEventListener("input", function () {
    card_number_dysplay.innerHTML = cardinput.value
})

mm.addEventListener("input", function () {
    datayher_dysplay.innerHTML = mm.value + "/" + yy.value
})

yy.addEventListener("input", function () {
    datayher_dysplay.innerHTML = mm.value + "/" + yy.value
})

cvcinput.addEventListener("input", function () {
    cvc_dysplay.innerHTML = cvcinput.value
})

submit1.addEventListener("click", function () {

    if (nameinput.value === "") {
        namespan.innerHTML = "Can'T Be Blank (NAME)"
        namespan.style.color = "red"
        validname = 0
    }
    else if (nameinput.value.includes("0") || 
            nameinput.value.includes("1") || 
            nameinput.value.includes("2") || 
            nameinput.value.includes("3") || 
            nameinput.value.includes("4") || 
            nameinput.value.includes("5") || 
            nameinput.value.includes("6") || 
            nameinput.value.includes("7") || 
            nameinput.value.includes("8") || 
            nameinput.value.includes("9") ||
            nameinput.value.includes("!") ||
            nameinput.value.includes("@") ||
            nameinput.value.includes("#") ||
            nameinput.value.includes("$") ||
            nameinput.value.includes("%") ||
            nameinput.value.includes("^") ||
            nameinput.value.includes("&") ||
            nameinput.value.includes("*") ||
            nameinput.value.includes("(") ||
            nameinput.value.includes(")")) {
        namespan.innerHTML = "Name Cannot Contain Numbers or Symbols"
        namespan.style.color = "red"
        validname = 0
    }
    else {
        namespan.innerHTML = ""
        validname = 1
    }

    if (cardinput.value.length === 12) {
        cardnumberspan.innerHTML = ""
        validcardnumber = 1
    }
    else {
        cardnumberspan.innerHTML = "Must be 12 Numbers (CARD NUMBER)"
        cardnumberspan.style.color = "red"
        validcardnumber = 0
    }

    if (mm.value.length === 2) {
        mmspan.innerHTML = ""
        validmm = 1
    }
    else {
        mmspan.innerHTML = "Must be 2 Numbers (MM)"
        mmspan.style.color = "red"
        validmm = 0
    }

    if (yy.value.length === 4) {
        yyspan.innerHTML = ""
        validyy = 1
    }
    else {
        yyspan.innerHTML = "Must be 4 Numbers (YY)"
        yyspan.style.color = "red"
        validyy = 0
    }

    if (cvcinput.value.length === 3) {
        cvcspan.innerHTML = ""
        validcvc = 1
    }
    else {
        cvcspan.innerHTML = "Must be 3 Numbers (CVC)"
        cvcspan.style.color = "red"
        validcvc = 0
    }

    // Save values when form is valid
    if (validname === 1 && validcardnumber === 1 && validmm === 1 && validyy === 1 && validcvc === 1) {
        localStorage.setItem("saved_name", nameinput.value)
        localStorage.setItem("saved_card", cardinput.value)
        localStorage.setItem("saved_mm", mm.value)
        localStorage.setItem("saved_yy", yy.value)
        localStorage.setItem("saved_cvc", cvcinput.value)
        localStorage.setItem("is_logged_in", "true")

        diva.style.display = "none"
        alert("successful")
        divt.style.display = "flex"
    }


})



submit2.addEventListener("click" , function () {
    divt.style.display = "none"
    diva.style.display = "flex"
})