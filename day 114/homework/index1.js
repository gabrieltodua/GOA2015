// 1)

let numbers = [10, 20, 30, 40, 50];
let index = numbers.indexOf(30);
console.log(index); 




// 2)

let names = ["ანა", "გიორგი", "მარიამ", "ლიკა"];
names.forEach((name) => {
  console.log(name);
});




// 3)

let nums = [3, 8, 12, 5, 20, 15];
let biggerThanTen = nums.filter((num) => num > 10);
console.log(biggerThanTen); 




// 4)

let fruits = ["Banana", "Orange", "Apple", "Mango"];
let hasApple = fruits.includes("Apple");
console.log(hasApple);




// 5)
let numbers2 = [5, 12, 18, 25, 30, 40];
let firstGreaterThan20 = numbers2.find((num) => num > 20);
console.log(firstGreaterThan20);



