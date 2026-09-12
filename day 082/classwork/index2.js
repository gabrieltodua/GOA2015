let form = document.getElementById("registrationForm");
let successMessage = document.getElementById("successMessage");


form.addEventListener("submit", function(event) {

    event.preventDefault();




    let name = document.getElementById("name").value.trim();

    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;

    let confirmPassword = document.getElementById("confirmPassword").value;


    let nameError = document.getElementById("nameError");
    nameError.textContent = "";




    let emailError = document.getElementById("emailError");
    emailError.textContent = "";




    let passwordError = document.getElementById("passwordError");
    passwordError.textContent = "";



    let confirmPasswordError = document.getElementById("confirmPasswordError");
    if (confirmPasswordError) confirmPasswordError.textContent = "";

   
    successMessage.textContent = "";

    let isValid = true;




    if (name === "") {
        nameError.textContent = "სახელი არ უნდა იყოს ცარიელი.";
        isValid = false;
    }



    let hasAtSymbol = false;

    for (let i = 0; i < email.length; i++) {
        if (email[i] === "@") {
            hasAtSymbol = true;
            break; 
        }


    }

    if (hasAtSymbol === false) {
        emailError.textContent = "ელ-ფოსტა უნდა შეიცავდეს @-ს.";
        isValid = false;
    }



    if (password.length < 6) {
        passwordError.textContent = "პაროლი უნდა იყოს მინიმუმ 6 სიმბოლო.";
        isValid = false;
    }



    if (password !== confirmPassword || confirmPassword === "") {
        
        if (confirmPasswordError && confirmPasswordError.textContent !== "") {

            confirmPasswordError.textContent = "პაროლები არ ემთხვევა.";

        } else {
            passwordError.textContent = "პაროლები არ ემთხვევა.";
        }

        isValid = false;
    }

    if (isValid === true) {

        successMessage.style.color = "green";
        successMessage.textContent = "რეგისტრაცია წარმატებით დასრულდა!";
    }
});