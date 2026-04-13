// <!--

// 1) გამოიყენე document.createElement(), რომ შექმნა ახალი <p> ელემენტი და დაამატო ის გვერდზე

// 2) შექმენი constructor ფუნქცია Person, რომელიც იღებს name პარამეტრს და ინახავს მას ობიექტში

// 3) შექმენი ახალი <div> ელემენტი createElement-ით და დაამატე მას ტექსტი innerText-ის გამოყენებით

// 4) შექმენი ორი ახალი ობიექტი Person constructor-ის გამოყენებით

// 5) შექმენი <button> ელემენტი createElement-ით და დაამატე ის body-ში 
    

// -->

// 1)

let p = document.createElement("p");

p.innerText = "This is a new paragraph.";

document.body.appendChild(p);









// 2)

function Person(name) {
    this.name = name;
}

let person1 = new Person("gabrieli");

let person2 = new Person("vato");

console.log(person1.name);

console.log(person2.name);













// 3)

let div = document.createElement("div");

div.innerText = "This is a new div.";

document.body.appendChild(div);












// 4)

function info(name,lastName,age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;

}

let info1 = new info("gabrieli","todua",20);

let info2 = new info("vato","jikaevi",20);

console.log(info1);

console.log(info2);











// 5)


let button = document.createElement("button");

button.innerText = "Click Me";

document.body.appendChild(button);
