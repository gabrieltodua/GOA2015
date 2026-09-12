// 2)

const passmain = "Password123";

let firstNameInput = document.getElementById("firstName");
let lastNameInput = document.getElementById("lastName");
let passwordInput = document.getElementById("password");
let statusDisplay = document.getElementById("status");

function checkpasword(e) {
    e.preventDefault();
    if (passwordInput.value === passmain) {
        statusDisplay.textContent = "Welcome to the website " + firstNameInput.value + " " + lastNameInput.value + "!!!!";
        statusDisplay.style.color = "green";
    } else {
        statusDisplay.textContent = "Wrong Password try again !!! ";
        statusDisplay.style.color = "red";
    }
}

//  3)

const passmain1 = "Password123";
const secretName = "SecretName";

let firstNameInput1 = document.getElementById("firstName1");
let lastNameInput2 = document.getElementById("lastName2");
let passwordInput3 = document.getElementById("Password3");
let statusDisplay4 = document.getElementById("status1");

function checkpasword1(e) {
    e.preventDefault();
    if (passwordInput3.value === passmain1 && firstNameInput1.value === secretName) {
        statusDisplay4.textContent = "Welcome to the website " + firstNameInput1.value + " " + lastNameInput2.value + "!!!!";
        statusDisplay4.style.color = "green";
    } else {
        statusDisplay4.textContent = "Wrong Password try again !!! ";
        statusDisplay4.style.color = "red";
    }
}