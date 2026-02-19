const currentDate = new Date();



// 1) 



console.log(currentDate.getFullYear());

// 2) 

console.log(currentDate.getHours());


// 3) 

function sayHello() {
    console.log("Hello");
}

setInterval(sayHello, 1000);


// 4) 

function showTime() {

    const now = new Date();

    let year = now.getFullYear();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    console.log(year, hour, minute, second);
}


setInterval(showTime, 2000);


// 5) 

let paragraph = document.getElementById("myText");

function changeText() {
    paragraph.innerHTML = "Text changed!!!";
}

setInterval(changeText, 3000);
