let button = document.getElementById("change")
let img = document.getElementById("dysplay")


button.addEventListener("click" , function () {
    fetch("https://api.thecatapi.com/v1/images/search")
        .then(response => response.json())
        .then(data => img_loader(data))
})

function img_loader(data) {
    img.src = data[0].url
}