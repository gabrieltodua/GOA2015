// 0

function f1 (name,l_name) {
    
    this.name = name 
    this.l_name = l_name
}


let name1 = new f1("gabriel","todua");

console.log(name1.name,name1.l_name )




// 1


class Human {

    constructor(name, lastName) {

        this.name = name;

        this.lastName = lastName;

    }


    sayHello() {

        console.log(`Hello, your name is : ${this.name} ${this.lastName}`);

    }
}


let person = new Human("gabriel", "todua");

person.sayHello(); 