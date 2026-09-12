fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => loader(data))

let divvvss = {}
let index = 0;
let how_much_loops = 0;

function loader(data) {

    for (let item of data) {
        let div = document.createElement("div")
        let h3 = document.createElement("h3")
        let h4 = document.createElement("h4")
        let img = document.createElement("img")

        h3.innerHTML = item.title
        img.src = item.image
        h4.innerHTML = item.price + "₾"
        
        div.className = "mainholder"
        h3.className = "title"
        h4.className = "price"
        img.className = "imgholder"

        div.id = `div_${index}`
        h3.id = `h3_${index}`
        h4.id = `h4_${index}`

        divvvss[index] = { div, h3, h4 }

        index = index + 1

        document.body.appendChild(div)
        div.appendChild(h3)
        div.appendChild(img)
        div.appendChild(h4)
    }
}


let cart = document.getElementById("cart")


