let now = 0;
let p = document.getElementById("con")
let img = document.getElementById("img")

let Animal = [
    "lion.png", //0
    "dog.png", //1
    "cat.png", //2
    "duck.png", //3
]


function next(){
    if(now === 3){
        now = 0
    } else{
        now += 1
    }
    
    img.src = Animal[now]

    p.innerHTML = `${now+1}/4 (Animal)`
}


function previous(){
    if(now === 0){
        now = 3
    } else {
        now -= 1
    }
    
    img.src = Animal[now]

    p.innerHTML = `${now+1}/4 (Animal)`
}


