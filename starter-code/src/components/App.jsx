import NavBar from "./NavBar"
import Footer from "./Footer"
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

import ShoppingCart from "./pages/ShoppingCart";
import RouteNotFound from "./RouteNotFound";



export default function App() {
    return (
        <div className="App">
            <NavBar />

            <Routes>
                <Route index element={<Home />} />
                <Route path="contact" element={<Contact />} />
                <Route path="shopping_cart" element={<ShoppingCart />} />
                <Route path="*" element={<RouteNotFound />} />
            </Routes>

            <Footer />

        </div >
    )
}