

// 2)



const nameInput = document.getElementById("Name");

const ageInput = document.getElementById("Age");

const countryInput = document.getElementById("Country");

const infoP = document.getElementById("info_p");


function info(e) {

    e.preventDefault();

    const Person = {
        Name: nameInput.value,
        Age: ageInput.value,
        Country: countryInput.value
    };

    console.log(Person);

    infoP.innerHTML =
        "Name: " + Person.Name + "<br>" +
        "Age: " + Person.Age + "<br>" +
        "Country: " + Person.Country;
}


// 3)




function people(name, lastname, age) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
}

const person1 = new people("Gurami", "Papunashvili", 21);

const person2 = new people("Gabriel", "Todua", 11);


console.log(person1);

console.log(person2);


