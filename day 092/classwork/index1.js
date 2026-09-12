// 0






// 1



function sayhello() {
    console.log("გამარჯობა");
}

const button = document.getElementById("mybutton");

button.addEventListener("click", function() {

    setTimeout(sayhello, 10000);

});