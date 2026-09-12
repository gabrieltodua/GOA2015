// 1

fetch("https://jsonplaceholder.typicode.com/users")
    .then(inn => inn.json())
    .then(data => console.log(data))




// 2

fetch("https://jsonplaceholder.typicode.com/users")
    .then(inn => inn.json())
    .then(data => console.log(data))




// 3

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(inn => inn.json())
    .then(data => console.log(data[0]))




// 4

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(inn => inn.json())
    .then(data => console.log(data))



// 5

fetch("https://jsonplaceholder.typicode.com/users")
    .then(inn => inn.json())
    .then(data => console.log(data[0].name))