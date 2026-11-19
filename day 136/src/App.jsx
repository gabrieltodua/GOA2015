import { useState } from "react"
import "./App.css"

export default function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "მათემატიკის სავარჯიშოები",
            subject: "მათემატიკა",
            completed: false
        },
        {
            id: 2,
            title: "ინგლისურის ესე",
            subject: "ინგლისური",
            completed: true
        },
        {
            id: 3,
            title: "ისტორიის წაკითხვა",
            subject: "ისტორია",
            completed: false
        }
    ])

    const [title, setTitle] = useState("")
    const [subject, setSubject] = useState("")

    const addTask = () => {
        if (title === "" || subject === "") {
            return
        }

        const newTask = {
            id: Date.now(),
            title: title,
            subject: subject,
            completed: false
        }

        setTasks([...tasks, newTask])
        setTitle("")
        setSubject("")
    }

    const toggleTask = (id) => {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed }
            }
            return task
        }))
    }

    return (
        <div className="app">
            <h1>ჩემი დავალებები</h1>

            <div className="form">
                <input
                    type="text"
                    placeholder="დავალების სახელი"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="საგანი"
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                />
                <button onClick={addTask}>დამატება</button>
            </div>

            <div className="list">
                {tasks.map(task => (
                    <div
                        key={task.id}
                        className={task.completed ? "card done" : "card"}
                    >
                        <h2 className="title">{task.title}</h2>
                        <p>საგანი: {task.subject}</p>
                        <p>{task.completed ? "დასრულებულია ✅" : "ჯერ არ დასრულებულა ⏳"}</p>
                        <button onClick={() => toggleTask(task.id)}>
                            {task.completed ? "თავიდან დაწყება" : "დასრულება"}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}