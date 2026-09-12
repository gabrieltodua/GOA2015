let username = document.getElementById("username")
let email = document.getElementById("email")
let password = document.getElementById("password")

let usernamec = document.getElementById("usernamec")
let emailc = document.getElementById("emailc")
let passwordc = document.getElementById("passwordc")

let submit = document.getElementById("submit")
let submitc = document.getElementById("submitc")

let divone = document.getElementById("sing_up")
let divtwo = document.getElementById("log_in")


submit.addEventListener("click" , function () {
    
    let valid = 0;

    if(email.value.includes("@")){
        valid = 1;
    }

    if(username.value === "" || password.value === "" || valid === 0){
        alert("Access denied")
    }

    else{
        localStorage.setItem("usern" , username.value)
        localStorage.setItem("pasw" , password.value)
        localStorage.setItem("emaill" , email.value)
        divone.style.display = "none"
        divtwo.style.display = "flex"
    }

})


submitc.addEventListener("click" , function () {

    if(usernamec.value === localStorage.getItem("usern") && passwordc.value === localStorage.getItem("pasw") && emailc.value === localStorage.getItem("emaill")){
        window.open("index2.html")
    }
    else{
        alert("Please enter the correct information")
    }

})