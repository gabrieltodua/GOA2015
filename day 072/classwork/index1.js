let html = document.body;
// 0

let davaleba1 = document.createTextNode("გამარჯობა, მე ვარ ტექსტი");



// 1


let davaleba2p = document.createElement("p");

davaleba2p.innerText = "გამარჯობა, მე ვარ javascriptში შექმნილი p თეგი";

davaleba2p.id = "davaleba2p";





window.onload = function() {

    html.appendChild(davaleba1);

    html.appendChild(davaleba2p);

}

