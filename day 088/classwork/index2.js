// 2


// 3


class Person {

    constructor(name) { 
        
        this.name = name; 

    }

}



class Developer extends Person {

    constructor(language) {

        this.language = language; 

    }
}

console.log(new Developer("gabrieli", "JS"));


