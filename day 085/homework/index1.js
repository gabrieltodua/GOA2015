// 1

const colors = ['red', 'green', 'blue', 'yellow'];

const [firstColor, secondColor] = colors;






// 2

const student = {
    name: 'გაბრიელ თოდუა',

    age: 11
    ,
    university: 'GOA'

};

const { name, age } = student;






// 3
    
const fruits = ['apple', 'banana', 'cherry'];

const [, secondFruit] = fruits;





// 4

const car = {
    brand: 'Toyota',
    model: 'Camry'
};

const { brand: carBrand, model: carModel } = car;




// 5

const settings = [100];

const [width, height = 200] = settings;
