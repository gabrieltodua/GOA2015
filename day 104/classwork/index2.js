

const username = document.getElementById("name");
const password = document.getElementById("pass");
const signupButton = document.getElementById("Signup");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const loginButton = document.getElementById("Login");
const nameCheck = document.getElementById("nameCheck");
const passCheck = document.getElementById("passCheck");

signupButton.addEventListener("click", function(e){
    e.preventDefault();
    localStorage.setItem("username", username.value);
    localStorage.setItem("password", password.value);
    signupForm.style.display = "none";
    loginForm.style.display = "block";
})

loginButton.addEventListener("click", function(e){


    let preuser = localStorage.getItem("username");

    let prepass = localStorage.getItem("password");

    if(!prepass || preuser){
        alert("info is not available");
    }

    e.preventDefault();
    if(nameCheck.value === localStorage.getItem("username") && passCheck.value === localStorage.getItem("password")){
        alert("Login Successful");
    }else {
        alert("Login Failed")
    }
})