let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let emailaddress = document.getElementById("emailaddress");
let password = document.getElementById("password");




function claim() {
    if (firstname.value === "") {
        firstname.style.backgroundColor = "red";
    } else {
        firstname.style.backgroundColor = "green";
    }

    if (lastname.value === "") {
        lastname.style.backgroundColor = "red";
    } else {
        lastname.style.backgroundColor = "green";
    }

    if (emailaddress.value === "") {
        emailaddress.style.backgroundColor = "red";
    } else {
        emailaddress.style.backgroundColor = "green";
    }

    if (password.value === "") {
        password.style.backgroundColor = "red";
    } else {
        password.style.backgroundColor = "green";
    }
    if (
        firstname.value !== "" &&
        lastname.value !== "" &&
        emailaddress.value !== "" &&
        password.value !== ""
    ){
        alert("success");
    }
    
}
