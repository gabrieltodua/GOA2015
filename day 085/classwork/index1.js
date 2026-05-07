// 0



// 1

let obj1 = {
    name1 : "obj1",
    status : "1",
    helper1 : "active",
}

let obj2 = {
    name2: "obj2",
    status: "2",
    helper1 : "not active",

}

let main = Object.assign({}, obj1, obj2);

console.log(main);