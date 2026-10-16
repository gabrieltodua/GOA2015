import './main.css'

let click = 0;
let m = 0;
let s = 0;
let h = 0;

let timerid = null;

function timer() {
    let show = document.getElementById("show")
    let main_button = document.getElementById("main_button")
    if(click === 0){
        click += 1
        main_button.innerHTML = "Stop"
        timerid = setInterval(() => {
        
            if(m >= 60){
                s += 1
                show.innerHTML = m + " : "+  s  + " : " + h
                m = 0
            }
            else if(s >= 60){
                h +=1
                show.innerHTML = m + " : "+  s  + " : " + h
                s = 0
            }
            else{
                m +=1
                show.innerHTML = m + " : "+  s  + " : " + h
            }
        }, 1);
    }
    else{
        clearInterval(timerid)
        timerid = null
        main_button.innerHTML = "Start";
        click = 0;
    }
}

export default function Main() {
    return (
        
    

    <div className='main'>

        <h1 className='title'>Stop Watch</h1>

        <div className='timer_div'>
            <h2 id='show'>0 : 0 : 0</h2>
        </div>

        <button id='main_button' onClick={timer}>Start</button>

    </div>


    )
}