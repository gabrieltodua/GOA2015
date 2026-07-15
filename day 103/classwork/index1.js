let Name = document.getElementById("name")
let email = document.getElementById("email")
let git = document.getElementById("git")
let butoon = document.getElementById("done")
let status = document.getElementById("status")
let valid = 0

document.addEventListener("click",function() {
    if (email.value.includes("@")){
    valid = valid + 1
    }   

    if(Name.value === "" || valid === 0 || git.value === ""){
        status.innerHTML = "🔴"
    }
    else{
        window.open("index2.html")
    }


})





