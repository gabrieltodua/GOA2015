let main = document.body;

main.addEventListener("keyup", function(e) {

    console.log(e);

    if (e.key === "1") {
        alert("You pressed the Enter key!");
    }

});


main.addEventListener("keydown", function(e) {

    console.log(e);

    if (e.key === "2") {
        alert("You pressed the Enter key!");
    }

});


main.addEventListener("keypress", function(e) {

    console.log(e);

    if (e.key === "3") {
        alert("You pressed the Enter key!");
    }

});