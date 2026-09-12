let Name = document.getElementById("Name");
let email = document.getElementById("email");
let phone_number = document.getElementById("phono_number");




let error_name = document.getElementById("nameerror");
let error_email = document.getElementById("emailerror");
let error_phono_number = document.getElementById("phononumbererror");




let done1 = document.getElementById("done");
let continuee = document.getElementById("continue");
let back = document.getElementById("back");



let user_time = Number(localStorage.getItem("time")) || 0;
let user_main = JSON.parse(localStorage.getItem("user_main")) || {};




done1.addEventListener("click", function () {

    let errors = 0;

    error_name.innerHTML = "";

    error_email.innerHTML = "";

    error_phono_number.innerHTML = "";


    if (Name.value == "") {

        error_name.innerHTML = "Please do not leave your name blank";

        errors++;
    }


    if (email.value == "") {

        error_email.innerHTML = "Please do not leave your email blank";

        errors++;
    }


    if (email.value != "") {

        if (!email.value.includes("@")) {

            error_email.innerHTML = "Your email needs an @ symbol";

            errors++;
        }
    }


    if (phone_number.value == "") {

        error_phono_number.innerHTML = "Please do not leave your phone number blank";

        errors++;
    }


    if (errors == 0) {

        user_time++;

        user_main["user" + user_time] = {

            name: Name.value,

            email: email.value,

            password: phone_number.value
        };

        localStorage.setItem("user_main", JSON.stringify(user_main));

        localStorage.setItem("time", user_time);

        Name.value = "";

        email.value = "";

        phone_number.value = "";
    }

});


let welcome = document.getElementById("welcome");
let dysplay_user = document.getElementById("dysplay_user");
let dysplayer = document.getElementById("dysplayer");


continuee.addEventListener("click", function () {

    welcome.style.display = "none";

    dysplay_user.style.display = "flex";

    dysplayer.innerHTML = "";


    for (let i = 1; i <= user_time; i++) {

        let user = user_main["user" + i];

        dysplayer.innerHTML +=
            "User " + i +
            "<br>Name: " + user.name +
            "<br>Email: " + user.email +
            "<br>Phone Number: " + user.password +
            "<br><br>";
    }

});


back.addEventListener("click" , function () {

    dysplayer.innerHTML = "";
    dysplay_user.style.display = "none";
    welcome.style.display = "flex";

})
