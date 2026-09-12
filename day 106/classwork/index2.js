// bostneuli

let pomidori  = document.getElementById("pomidori")
let kitri = document.getElementById("kitri")
let niori = document.getElementById("niori")


// sasmelebi

let pepsi = document.getElementById("pepsi")
let lipton  = document.getElementById("lipton")
let nataxtari  = document.getElementById("nataxtari")


// cipsi

let jekeri = document.getElementById("jekeri")
let leisi = document.getElementById("leisi")
let doritosi  = document.getElementById("doritosi")


// xorceuli

let bibilo = document.getElementById("bibilo")
let phazenda = document.getElementById("phazenda")
let kualiko = document.getElementById("kualiko")


// p

// bostneulip

let pomidorip  = document.getElementById("pomidorip")
let kitrip = document.getElementById("kitrip")
let niorip = document.getElementById("niorip")


// sasmelebip

let pepsip = document.getElementById("pepsip")
let liptonp  = document.getElementById("liptonp")
let nataxtarip  = document.getElementById("nataxtarip")


// cipsip

let jekerip = document.getElementById("jekerip")
let leisip = document.getElementById("leisip")
let doritosip  = document.getElementById("doritosip")


// xorceulip

let bibilop = document.getElementById("bibilop")
let phazendap = document.getElementById("phazendap")
let kualikop = document.getElementById("kualikop")







// pomidori

pomidorip.innerHTML = localStorage.getItem("pomidori")

pomidori.addEventListener("click" , function () {
    localStorage.setItem("pomidori",  "პომიდორი (ქართული) 1კგ 1.95 ₾")
    pomidorip.innerHTML = localStorage.getItem("pomidori")
})

pomidorip.addEventListener("click" , function () {
    localStorage.setItem("pomidori" , "")
    pomidorip.innerHTML = localStorage.getItem("pomidori")
})


// kitri

kitrip.innerHTML = localStorage.getItem("kitri")

kitri.addEventListener("click" , function () {
    localStorage.setItem("kitri",  "კიტრი (ქართული) 1კგ 1.95 ₾")
    kitrip.innerHTML = localStorage.getItem("kitri")
})

kitrip.addEventListener("click" , function () {
    localStorage.setItem("kitri" , "")
    kitrip.innerHTML = localStorage.getItem("kitri")
})



// niori

niorip.innerHTML = localStorage.getItem("niori")

niori.addEventListener("click" , function () {
    localStorage.setItem("niori",  "ნიორი ქართული 1კგ 7.45 ₾")
    niorip.innerHTML = localStorage.getItem("niori")
})

niorip.addEventListener("click" , function () {
    localStorage.setItem("niori" , "")
    niorip.innerHTML = localStorage.getItem("niori")
})



// pepsi


pepsip.innerHTML = localStorage.getItem("pepsi")

pepsi.addEventListener("click" , function () {
    localStorage.setItem("pepsi",  "გამაგრილებელი სასმელი პეპსი 2,25ლ 3.95 ₾")
    pepsip.innerHTML = localStorage.getItem("pepsi")
})

pepsip.addEventListener("click" , function () {
    localStorage.setItem("pepsi" , "")
    pepsip.innerHTML = localStorage.getItem("pepsi")
})




// lipton


liptonp.innerHTML = localStorage.getItem("lipton")

lipton.addEventListener("click" , function () {
    localStorage.setItem("lipton",  "ცივი ჩაი ლიპტონ ჟოლო 0,5ლ 1.69 ₾")
    liptonp.innerHTML = localStorage.getItem("lipton")
})

liptonp.addEventListener("click" , function () {
    localStorage.setItem("lipton" , "")
    liptonp.innerHTML = localStorage.getItem("lipton")
})






// nataxtari


nataxtarip.innerHTML = localStorage.getItem("nataxtari")

nataxtari.addEventListener("click" , function () {
    localStorage.setItem("nataxtari",  "ლიმონათი ნატახტარი მსხალი 2,0ლ 2.99 ₾")
    nataxtarip.innerHTML = localStorage.getItem("nataxtari")
})

nataxtarip.addEventListener("click" , function () {
    localStorage.setItem("nataxtari" , "")
    nataxtarip.innerHTML = localStorage.getItem("nataxtari")
})






// jekeri


jekerip.innerHTML = localStorage.getItem("jekeri")

jekeri.addEventListener("click" , function () {
    localStorage.setItem("jekeri",  "ჩიფსი კარტოფილის ჯეკერი არაჟანი და ხახვი 150გრ 3.99 ₾")
    jekerip.innerHTML = localStorage.getItem("jekeri")
})

jekerip.addEventListener("click" , function () {
    localStorage.setItem("jekeri" , "")
    jekerip.innerHTML = localStorage.getItem("jekeri")
})






// leisi


leisip.innerHTML = localStorage.getItem("leisi")

leisi.addEventListener("click" , function () {
    localStorage.setItem("leisi",  "ჩიფსი კარტოფილის ლეისი კლასიკი 117გრ 5.80 ₾")
    leisip.innerHTML = localStorage.getItem("leisi")
})

leisip.addEventListener("click" , function () {
    localStorage.setItem("leisi" , "")
    leisip.innerHTML = localStorage.getItem("leisi")
})








// doritosi


doritosip.innerHTML = localStorage.getItem("doritosi")

doritosi.addEventListener("click" , function () {
    localStorage.setItem("doritosi",  "ჩიფსი სიმინდის დორიტოსი აკილი 130გრ  4.49 ₾")
    doritosip.innerHTML = localStorage.getItem("doritosi")
})

doritosip.addEventListener("click" , function () {
    localStorage.setItem("doritosi" , "")
    doritosip.innerHTML = localStorage.getItem("doritosi")
})







// bibilo


bibilop.innerHTML = localStorage.getItem("bibilo")

bibilo.addEventListener("click" , function () {
    localStorage.setItem("bibilo",  "ფილე გაყინული ბიბილო ქათმის 1000გრ  6.99 ₾")
    bibilop.innerHTML = localStorage.getItem("bibilo")
})

bibilop.addEventListener("click" , function () {
    localStorage.setItem("bibilo" , "")
    bibilop.innerHTML = localStorage.getItem("bibilo")
})






// pazenda


phazendap.innerHTML = localStorage.getItem("phazenda")

phazenda.addEventListener("click" , function () {
    localStorage.setItem("phazenda",  "ქათმის ჩხირები ფაზენდა 300გრ  2.99 ₾")
    phazendap.innerHTML = localStorage.getItem("phazenda")
})

phazendap.addEventListener("click" , function () {
    localStorage.setItem("phazenda" , "")
    phazendap.innerHTML = localStorage.getItem("phazenda")
})






// kualiko


kualikop.innerHTML = localStorage.getItem("kualiko")

kualiko.addEventListener("click" , function () {
    localStorage.setItem("kualiko",  "ფრთა პანირებული ქუალიკო ქათმის 500გრ 9.90 ₾")
    kualikop.innerHTML = localStorage.getItem("kualiko")
})

kualikop.addEventListener("click" , function () {
    localStorage.setItem("kualiko" , "")
    kualikop.innerHTML = localStorage.getItem("kualiko")
})

