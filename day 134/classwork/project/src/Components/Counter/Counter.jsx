import { use, useState } from "react";
export default function Counter() {
    const [Counter,SetCounter] = useState(0)
    let ChangeCounter = () => SetCounter(prevCounter => prevCounter + 3)
    return (
        <>
            <button onClick={ChangeCounter}>+3</button>
            <h1>{Counter}</h1>
        </>
    )
}