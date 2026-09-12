let diva = document.getElementById("sign_up")
let dive = document.getElementById("sign_in")

let username = document.getElementById("user")
let email = document.getElementById("email")
let password = document.getElementById("password")

let done = document.getElementById("done")

done.addEventListener("click" , function () {
    let valid = 0;

    if(email.value.includes("@")){
        valid = 1;
    }

    if(username.value === "" || valid === 0 || password.value === ""){
        console.log("not valid")
    }

    else{
        localStorage.setItem("name" , username.value)
        localStorage.setItem("em" , email.value)
        localStorage.setItem("pasw" , password.value)
        diva.style.display = "none"
        dive.style.display = "block"
    }
})

let usernamee = document.getElementById("usere")
let pawwwe = document.getElementById("paswe")
let donee = document.getElementById("donee")

donee.addEventListener("click" , function () {
    if(usernamee.value === localStorage.getItem("name") && pawwwe.value === localStorage.getItem("pasw")){
        alert("correct")
    }
    else{
        alert("wrong")
    }
})