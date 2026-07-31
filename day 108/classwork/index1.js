let Name = document.getElementById("Name");
let Email = document.getElementById("email");
let Password = document.getElementById("password");
let done = document.getElementById("done");

let usersObject = JSON.parse(localStorage.getItem("usersObject")) || {};

let user_amount = localStorage.getItem("user_amount") || 0;

done.addEventListener("click", function () {
    user_amount++;

    usersObject["user" + user_amount] = {
        name: Name.value,
        email: Email.value,
        password: Password.value
    };


    localStorage.setItem("usersObject", JSON.stringify(usersObject));
    localStorage.setItem("user_amount", user_amount);

    console.log(usersObject);

    Name.value = "";
    Email.value = "";
    Password.value = "";
});