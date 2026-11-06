import neoncore from './logo.svg'
import './Left.css'
export default function Left(props) {
    return(
        <div className="left">
            <img src={neoncore}/>
            <br />
            <h1 className='help1'><span className='help2'>//</span> JOIN THE NEXUS</h1>
            <p className='help3'>Initialize your NEONCORE identity</p>
            <br />
            <br />
            <br />
            <hr className='help4'/>
            <div className='help5'>
                <h5 className='help6'>Operator ID</h5>
                <h5 className='help7'>0 / 5 ready</h5>
            </div>
            <h2 className='help8'>Unassigned</h2>
            <div className='help9'>
                <h3 className='s'>Callsign {props.callsign}</h3>
                <h3 className='s'>Email {props.email}</h3>
                <h3 className='s'>Password {props.password}</h3>
                <h3 className='s'>Confirm {props.confirm}</h3>
            </div>
        </div>
    )
}
//   Callsign
//   Email
//   Password
//   Confirm
//   Terms