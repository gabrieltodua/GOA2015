// 0)

function Human(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.main = function() {
        console.log("My name is " + this.name + " " + this.lastName + " and I am " + this.age + " years old.");
    }
}

let human1 = new Human("gabrieli", "todua", 11);

human1.main();








// 1)

function Dogs (dog_name , dog_breed , dog_age) {
    this.dog_name = dog_name;
    this.dog_breed = dog_breed;
    this.dog_age = dog_age;
    this.main = function() {
        console.log("My dog's name is " + this.dog_name + ", he is a " + this.dog_breed + " and he is " + this.dog_age + " years old.");
    }
}

let dog1 = new Dogs("Buddy", "German Shepherd", 5);

dog1.main();