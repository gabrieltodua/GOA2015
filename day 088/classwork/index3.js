// 4

class Main {
    
    constructor(name, age) {

        this.name = name;

        this.age = age;

    }
}




class SayHi extends Main {

    constructor(name, age) {

        super(name, age); 

    }

    hi() {

        console.log(`Hello, my name is : ${this.name} and my age is : ${this.age}`);

    }
}

const person = new SayHi("gabrieli", 11);

person.hi();

