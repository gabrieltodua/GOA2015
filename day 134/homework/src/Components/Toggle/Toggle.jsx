import { useState } from "react";
export default function Toggle() {
    const [Toggle , SetToggle] = useState(true)
    let FToggle = () => {SetToggle(prevToggle => !prevToggle)} 
    return (
        <>
            {Toggle && <h3>Hello React</h3>}
            <button onClick={FToggle}>Click Me To Toggle On / Off The Text Visibility</button>
        </>
    )
}