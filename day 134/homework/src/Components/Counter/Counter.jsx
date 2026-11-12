import { useState } from "react"
export default function Counter() {
    const [Counter , SetCounter] = useState(0)

    let plus = () => {SetCounter(PrevCounter => PrevCounter + 1)}
    let minus = () => {SetCounter(PrevCounter => PrevCounter - 1)}

    return (
        <>
            <h3>{Counter}</h3>
            <button onClick={plus}>+1</button>
            <button onClick={minus}>-1</button>
        </>
    )
}