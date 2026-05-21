// 1

class Person1 {

    constructor(name) {

        this.name = name

    }
}

// 2

class Person2 {

    constructor(name, age) {

        this.name = name
        this.age = age

    }
}

// 3

class Person3 {

    constructor(name, age, city) {

        this.name = name
        this.age = age
        this.city = city

    }
}

let person = new Person3("Gabrieli", 11, "Tbilisi")

// 4

class Person4 {

    constructor(name, age, city) {

        this.name = name
        this.age = age
        this.city = city

    }

    name() {
        console.log(this.name)
    }
    
}

// 5

class Car {

    constructor(brand, year) {

        this.brand = brand
        this.year = year

    }
}

