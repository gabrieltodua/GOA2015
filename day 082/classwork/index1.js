// 0
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let submitButton = document.getElementById("registrationForm"); 

submitButton.addEventListener("submit", function(event) {

    event.preventDefault(); 

    let name = nameInput.value.trim(); 
    let email = emailInput.value;
    let password = passwordInput.value;



    if (name === "") {
        alert("შეცდომა: სახელი არ უნდა იყოს ცარიელი!");
        return;
    } 

    if (password === "") {
        alert("შეცდომა: პაროლი არ უნდა იყოს ცარიელი!");
        return;
    }

    let hasAtSymbol = false;

    for (let i = 0; i < email.length; i++) {

        if (email[i] === "@") {

            hasAtSymbol = true;

            break;
        }
    }

    if (hasAtSymbol === false) {
        alert("შეცდომა: ელ-ფოსტა უნდა შეიცავდეს @ სიმბოლოს!");
        return; 
    }


    alert("რეგისტრაცია წარმატებით დასრულდა!");

});