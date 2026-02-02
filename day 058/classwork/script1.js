function Person(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;

    this.getBirthYear = function () {
        return 2026 - this.age;
    };
}

function showInfo(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let age = Number(document.getElementById("age").value);

    let user = new Person(name, surname, age);

    document.getElementById("result").textContent =
        "გამარჯობა, " +
        user.name + " " +
        user.surname +
        ", თქვენ დაიბადეთ " +
        user.getBirthYear() +
        " წელს";
}



function Dog(name, breed) {
    this.name = name;
    this.breed = breed;

    this.talk = function () {
        console.log("bark bark");
    };
}

function createDog() {
    let myDog = new Dog("Buddy", "Labrador");
    myDog.talk();
}
