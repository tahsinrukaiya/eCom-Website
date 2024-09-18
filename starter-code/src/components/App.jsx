import NavBar from "./NavBar"
import Main from "./Main"
import Footer from "./Footer"
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ShoppingCart from "./pages/ShoppingCart";


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