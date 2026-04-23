let now = 0;
let p = document.getElementById("colors_con")
let div = document.getElementById("color")

let color = [
    "255, 4, 0", //0
    "17, 0, 255", //1
    "255, 247, 0", //2
    "0, 255, 4", //3
]


function next(){
    if(now === 3){
        now = 0
    } else{
        now += 1
    }
    div.style.backgroundColor = `rgb(${color[now]})`;

    p.innerHTML = `${now+1}/4 (colors)`
}


function previous(){
    if(now === 0){
        now = 3
    } else {
        now -= 1
    }
    
    div.style.backgroundColor = `rgb(${color[now]})`;

    p.innerHTML = `${now+1}/4 (colors)`
}


