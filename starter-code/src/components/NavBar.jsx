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
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                <ul className={menuOpen ? "open" : ""}>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="contact">Contact</NavLink></li>
                    <li>
                        <NavLink to="shopping_cart"><i className="fa-solid fa-cart-shopping"><sup>{"3"}</sup></i></NavLink>
                    </li>
                </ul>
            </div>
        </>)
}