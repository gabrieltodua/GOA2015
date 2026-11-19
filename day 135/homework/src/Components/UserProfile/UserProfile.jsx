import { useState } from "react"

export default function UserProfile() {
    const [person, setPerson] = useState([])
    const [name, setName] = useState("")
    const [city, setCity] = useState("")
    const [isOnline, setIsOnline] = useState(false)

    const save = () => {
        setPerson(prev => [...prev, { name: name, city: city, isOnline: isOnline }])
        setName("")
        setCity("")
        setIsOnline(false)
    }

    return (
        <>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="City"
                value={city}
                onChange={e => setCity(e.target.value)}
            />
            <button onClick={() => setIsOnline(prev => !prev)}>
                {isOnline ? "Online" : "Offline"}
            </button>
            <button onClick={save}>Save</button>

            <div>
                {person.map((p, index) => (
                    <div key={index}>
                        <h2>{p.name}</h2>
                        <h4>{p.city}</h4>
                        <h3>{p.isOnline ? "Online" : "Offline"}</h3>
                    </div>
                ))}
            </div>
        </>
    )
}