import "../styles/index.css"
import { useState } from "react"
import { Link, NavLink } from "react-router-dom"

export default function NavBar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className="navBar">
                <div className="logo">
                    <span><Link to="/">SpeedyMart</Link></span></div>
                <div className="menu" onClick={() =>
                    setMenuOpen(!menuOpen)
                }>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={menuOpen ? "open" : ""}>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="contact">Contact</NavLink></li>
                    <li><Link><i className="fa-solid fa-cart-shopping"></i></Link>
                    </li>
                </ul>
            </div>
        </>)
}