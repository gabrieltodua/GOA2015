let maindiv = document.getElementById("main")
let cartitems = document.getElementById("cartitems")
let total = document.getElementById("total")
let startbtn = document.getElementById("startbtn")


let cart = JSON.parse(localStorage.getItem("cart")) || []

fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => loader(data))

function loader(data) {

    for (let i of data) {
        let div = document.createElement("div")
        let img = document.createElement("img")
        let h3 = document.createElement("h3")
        let h4 = document.createElement("h4")

        img.className = "img"
        h3.className = "h3"
        h4.className = "h4"
        div.className = "div"

        img.src = i.image
        h3.innerHTML = i.title
        h4.innerHTML = i.price + " ₾"
        div.id = i.id

        // click the product to put it in the cart
        div.onclick = function () {
            cart.push({ title: i.title, price: i.price })
            save()
            showcart()
        }

        div.appendChild(img)
        div.appendChild(h3)
        div.appendChild(h4)
        maindiv.appendChild(div)
    }
}


function save() {
    localStorage.setItem("cart", JSON.stringify(cart))
}

function showcart() {
    cartitems.innerHTML = ""
    let sum = 0

    for (let item of cart) {
        let row = document.createElement("p")
        row.className = "cartrow"
        row.innerHTML = item.title + " - " + item.price + " ₾"
        cartitems.appendChild(row)
        sum = sum + item.price
    }

    total.innerHTML = "Total: " + sum + " ₾"
}


startbtn.addEventListener("click" , function () {

    if (cart.length === 0) {
        alert("Your cart is empty")
        return
    }

    alert("Thank you! You bought " + cart.length + " items.")
    cart = []
    save()
    showcart()

})


showcart()