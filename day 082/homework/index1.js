// 1

let form1 = document.getElementById("form1");

form1.addEventListener("submit", function(e) {

    e.preventDefault();

    let input1 = document.getElementById("input1");


    if (input1.value === "") {

        alert("Input field cannot be empty");
    }
});

// 2

let form2 = document.getElementById("form2");

form2.addEventListener("submit", function(e) {

    e.preventDefault(); 

    let input2 = document.getElementById("input2");
    let emailValue = input2.value;


    if (emailValue === "") {
        alert("Input field cannot be empty");
    } 

    else {
        alert("Success! Email is valid.");
    }

    for (let i = 0; i < emailValue.length; i++) {

        if (emailValue[i] === "@") {

            return;

        }

    }



});


// 3

let form3 = document.getElementById("form3");

form3.addEventListener("submit", function(e) {

    e.preventDefault();

    let input3 = document.getElementById("input3");

    let passwordValue = input3.value;

    if (passwordValue === "") {

        alert("Input field cannot be empty");

    }

    else if (passwordValue.length < 6) {

        alert("Password must be at least 6 characters long");

    }

    else {

        alert("Success! Password is valid.");

    }

});


// 4

let form4 = document.getElementById("form4");

form4.addEventListener("submit", function(e) {

    e.preventDefault();

    let input5 = document.getElementById("input5").value;

    let input6 = document.getElementById("input6").value;


    if (input5 === "" || input6 === "") {

        alert("Both password fields must be filled!");

    } 

    else if (input5 !== input6) {

        alert("Passwords do not match. Please try again.");

    } 

    else {

        alert("Success! Passwords match.");

    }
});



// 5

let form5 = document.getElementById("form5");

form5.addEventListener("submit", function(e) {

    e.preventDefault();

    let input7 = document.getElementById("input7").value;

    if (input7 === "") {

        alert("Input field cannot be empty");

    }

    else if (input7 < 18) {

        alert("You must be at least 18 years old");

    }

    else {

        alert("Success! You are eligible.");

    }
});


