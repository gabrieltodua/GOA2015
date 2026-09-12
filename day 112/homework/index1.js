let Name = document.getElementById("Name")
let Email = document.getElementById("Email")
let Password = document.getElementById("Password")

let regd = document.getElementById("regd")
let logd = document.getElementById("logd")

let reg = document.getElementById("reg")
let log = document.getElementById("log")


regd.addEventListener("click",  function () {

    let validname = 0;
    let validemail = 0;
    let validpassword = 0;

    if(Name.value === ""){
        console.log("n")
    }
    else{
        validname = 1;
    }

    
    if(Email.value.includes("@")){
        validemail = 1;
        console.log("e")
    }

    
    if(Password.value === ""){
        console.log("p")
    }
    else{
        validpassword = 1;
    }


    if(validname === 1 && validemail === 1 && validpassword === 1){

        localStorage.setItem("Name" , Name.value)
        localStorage.setItem("Password" , Password.value)
        localStorage.setItem("Email" , Email.value)
        reg.style.display = "none"
        log.style.display = "flex"

    }



})



let Namee = document.getElementById("Namee")
let Emaill = document.getElementById("Emaill")
let Passwordd = document.getElementById("Passwordd")


logd.addEventListener("click" , function () {

    if(Namee.value === localStorage.getItem("Name") && 
    Passwordd.value === localStorage.getItem("Password") && 
    Emaill.value === localStorage.getItem("Email")){
        window.open("index2.html")
    }



    





})