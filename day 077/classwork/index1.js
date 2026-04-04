

let bill = document.getElementById("money");
let people = document.getElementById("people");
let custom = document.getElementById("money_custom");

let tip = document.getElementById("tip");
let total = document.getElementById("total");

let bill_value = bill.value;
let people_value = people.value;
let custom_value = custom.value;

let five = document.getElementById("money_five");
let ten = document.getElementById("money_ten");
let fifteen = document.getElementById("money_fifteen");
let twentyfive = document.getElementById("money_twentyfive");
let fifty = document.getElementById("money_fifty");
let calculate = document.getElementById("calculate");

let value = 0;

five.addEventListener("click", function(){

    value = 5;
    console.log(value);

});

ten.addEventListener("click", function(){

    value = 10;
    console.log(value);
});


fifteen.addEventListener("click", function(){

    value = 15;
    console.log(value);
});


twentyfive.addEventListener("click", function(){

    value = 25;
    console.log(value);
});

fifty.addEventListener("click", function(){

    value = 50;
    console.log(value);
});

custom.addEventListener("input", function(){

    value = custom_value.value;
    console.log(value);
});



// tip

let main_tip = bill_value / 100 * value;

console.log(main_tip);

// total

let tip_per_person =  bill_value / people_value;
console.log(tip_per_person);


calculate.addEventListener("click", function(){

    total.textContent = tip_per_person
    tip.textContent = main_tip;
    console.log(value);

});

