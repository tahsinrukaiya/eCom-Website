import "../styles/index.css"
import { Link } from "react-router-dom"

export default function NavBar() {
    return <div className="navBar">
        <span className="logo">SpeedyMart</span>
        <ul className="navItem">
            <li><Link to="index">Home</Link></li>
            <li><Link to="contact">Contact</Link></li>
            <li><Link><i className="fa-solid fa-cart-shopping"></i></Link>
            </li>
        </ul>
    </div>
}