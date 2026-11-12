import { useState } from "react";
import './ColorChanger.css'
export default function ColorChanger() {
    const [Color , SetColor] = useState("white")
    let red = () => SetColor(prevColor => prevColor = "Red")
    let green = () => SetColor(prevColor => prevColor = "Green")
    let blue = () => SetColor(prevColor => prevColor = "Blue")
    return (
        <>
            <div className="main" style={{backgroundColor : Color}}></div>
            <button onClick={red}>Red</button>
            <button onClick={green}>Green</button>
            <button onClick={blue}>Blue</button>
        </>
    )
}