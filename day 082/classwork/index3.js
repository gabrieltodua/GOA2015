// 2

let sendBtn = document.getElementById("send");

let cancelBtn = document.getElementById("cancel");

let timeoutID;

sendBtn.addEventListener("click", function() {

    timeoutID = setTimeout(function() {

        alert("შეტყობინება გაიგზავნა!");

    }, 3000);
});


cancelBtn.addEventListener("click", function() {

    clearTimeout(timeoutID);

    alert("გაუქმდა");
});


// 3


let waitText = document.getElementById("time");

let startBtn = document.getElementById("start");

let resetBtn = document.getElementById("reset");

let timerID;

startBtn.addEventListener("click", function() {

    timerID = setTimeout(function() {

        waitText.textContent = "დრო ამოიწურა!";

    }, 5000);

});


resetBtn.addEventListener("click", function() {

    clearTimeout(timerID);

    waitText.textContent = "დაელოდეთ...";
});

