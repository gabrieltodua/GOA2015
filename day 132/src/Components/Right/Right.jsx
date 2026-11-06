import Left from '../Left/Left'
import './Right.css'
import { useState } from "react";

export default function Right() {
    function Check() {
        let verified = 0
        if(CT.length >= 5 && ET.includes("@") && PT.length >= 5 && PT === COT){
            verified +=1
            setC(CT)
            setE(ET)
            setP(PT)
            setCO(COT)
        }
    }
    const [C,setC] = useState('') //Callsign
    const [E,setE] = useState('') //Email
    const [P,setP] = useState('') //Password
    const [CO,setCO] = useState('') //Confirm

    const [CT,setCT] = useState('') //Callsign
    const [ET,setET] = useState('') //Email
    const [PT,setPT] = useState('') //Password
    const [COT,setCOT] = useState('') //Confirm
    
    return (
        <div className='main'>
            <Left callsign={C} email={E} password={P} confirm={CO}/>
            <div className='right'>
                <div className='h1'>
                    <p className='h2'>New Operator</p>
                    <p className='h3'>All Fields Required</p>
                </div>

                <hr className='h4'/>
                <div className='h5'>
                    <h5 className='h6'>Callsign</h5>
                    <input type="text" className='h7' placeholder='e.g. Vortex_07'onChange={(e) => setCT(e.target.value)}/>
                    <p className='h8'>3–20 characters: letters, numbers, _ or -</p>
                    <h5 className='h6'>Email</h5>
                    <input type="text" className='h7' placeholder='you@example.com'onChange={(e) => setET(e.target.value)}/>
                    <h5 className='h6'>Password</h5>
                    <input type="text" className='h7'onChange={(e) => setPT(e.target.value)}/>
                    <p className='h8'>At least 8 characters</p>
                    <h5 className='h6'>Confirm</h5>
                    <input type="text" className='h7'onChange={(e) => setCOT(e.target.value)}/>
                    <p className='h8'>3–20 characters: letters, numbers, _ or -</p>
                    <div className='h9'>
                        <input type='checkbox' className='h10'/>
                        <p className='h11'>I accept the Terms and Privacy Policy.</p>
                    </div>
                    <br />
                    <button className='h12'onClick={Check}>Initialize account</button>
                </div>
                
            </div>
        </div>
    )
}
//   Callsign
//   Email
//   Password
//   Confirm
//   Terms
