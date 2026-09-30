import './Header.css'
import Burger from './burger.svg'

export default function Header() {
    return (
        <header className="header">
            <div className="logo">
                <div className="dot"></div>
                <span>Bridge Collective</span>
            </div>
            <img src={Burger} className="burger-icon"/>
        </header>
    )
}
