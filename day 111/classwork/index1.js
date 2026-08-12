const Form = document.getElementById("Form")
const Tasks = document.getElementById("Tasks")


let taskArray = []
cycles = 0
idsb = []
idsli = []

Form.addEventListener("submit", (e) => {
    e.preventDefault()
    taskArray.push(Form.input.value)
    localStorage.setItem("tasks", JSON.stringify(taskArray))

    Tasks.innerHTML = ""
    for (let i = 0; i < taskArray.length; i++) {
        Tasks.innerHTML += `<li>${taskArray[i]}</li>`
    }
})


Tasks.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.style.textDecoration = "line-through"
    }
})

let deletee = document.getElementById("delete")

deletee.addEventListener("click" ,  function () {
    localStorage.clear()
    Tasks.innerHTML = ""
})