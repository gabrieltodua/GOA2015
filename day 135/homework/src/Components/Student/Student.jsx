import { useState } from "react"

export default function Student() {
    let add = () => SetStudent(prev => prev.map(i => ({...i , age : i.age + 1})))
    const [Student,SetStudent] = useState([{
        name : "Gabrieli" , 
        age : 11 ,
        grade : 6 , 
    }])
    return(
        <div>
            {Student.map(i => 
                <div>
                    <h2>{i.name}</h2>
                    <h4>{i.age}</h4>
                    <h3>{i.grade}</h3>
                    <button onClick={add}>Click To +1 Age</button>
                </div>
            )}
        </div>
    )
}




