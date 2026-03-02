let textdate = document.getElementById("status")

function date(){

    const date = new Date()

    let y = date.getFullYear()

    let h = date.getHours()

    let m = date.getMinutes()

    let s = date.getSeconds()
    
    textdate.innerHTML = y + " " + h + " " + m + " " + s;
}


setInterval(date, 1000)


