import './Headerr.css'

export default function Headerr() {
    return (
        <div className='main2'>
            <h1>What's the sky looking like today?</h1>
            <div className='main3'>
                <input type="text" placeholder='Search for a place...' className='main4' /> 
                <button className='main5'>Search</button>
            </div>

        </div>
    )
}