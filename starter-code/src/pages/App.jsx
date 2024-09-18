import NavBar from "../components/NavBar"
import Main from "../components/Main"
import Footer from "../components/Footer"
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Contact from "../components/Contact";
import ShoppingCart from "../components/ShoppingCart";


export default function App() {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/shopping_cart" element={<ShoppingCart />} />

                </Route>
            </Routes>
            <Main />
            <Footer />

        </div >
    )
}