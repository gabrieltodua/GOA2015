let Name = document.getElementById("name")
let lname = document.getElementById("lname")
let email = document.getElementById("emadrees")
let pasword = document.getElementById("pass")
let submit = document.getElementById("submit")




submit.addEventListener("click" , function () {
    let valid = 0
    for (let i = 0; i < email.value.length; i++) {
        console.log(i)
        if (email.value[i] === "@") {
            valid = 1
            break
        }
    }

    if (Name === "" || lname === "" ||  valid === 0 || pasword === ""){

        Name.style.border = "red solid 3px"
        lname.style.border = "red solid 3px"
        email.style.border = "red solid 3px"
        pasword.style.border = "red solid 3px"
        
    }

    else{
        Name.style.border = "green solid 3px"
        lname.style.border = "green solid 3px"
        email.style.border = "green solid 3px"
        pasword.style.border = "green solid 3px"
        window.open("index2.html")
    }


})
