let open_button = document.getElementById("b1");     
let close_button = document.getElementById("b2");    
let main = document.getElementById("main");  
let main_nav = document.getElementById("nav");      
let bb1 = document.getElementById("bb1");
let bb2 = document.getElementById("bb2");
let bb3 = document.getElementById("bb3");


open_button.addEventListener("click", function() {
    main.style.display = "none";   
    main_nav.style.display = "flex"; 
    bb1.style.display = "block";
    bb1.style.width = "300px"
    bb1.style.height = "50px"
    bb1.style.backgroundColor = "rgb(40, 36, 46)"
    bb1.style.color = "rgb(252, 252, 252)"
    bb2.style.width = "300px"
    bb2.style.height = "50px"
    bb2.style.backgroundColor = "rgb(40, 36, 46)"
    bb2.style.color = "rgb(252, 252, 252)"  
    bb3.style.width = "300px"
    bb3.style.height = "50px"
    bb3.style.backgroundColor = "rgb(40, 36, 46)"
    bb3.style.color = "rgb(252, 252, 252)"
    bb2.style.display = "block";
    bb3.style.display = "block";
    main_nav.style.alignItems = "center";
    main_nav.style.justifyContent = "center";
    main_nav.style.flexDirection = "column";
    main_nav.style.gap = "50px"
});

close_button.addEventListener("click", function() {
    main.style.display = "block";  
    main_nav.style.display = "none";
    bb1.style.display = "none";
    bb2.style.display = "none";
    bb3.style.display = "none";
});