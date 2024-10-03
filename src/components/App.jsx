import NavBar from "./NavBar"
import Footer from "./Footer"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import SingleProduct from "./pages/SingleProduct"


import ShoppingCart from "./pages/ShoppingCart";
import RouteNotFound from "./RouteNotFound";
import ProductCard from "./ProductCard"
import { CartProvider } from "./CartContext"


export default function App() {
    return (
        <CartProvider>
            <div className="App">
                <NavBar />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="shopping_cart" element={<ShoppingCart />} />
                    <Route path="/" element={<ProductCard />} />
                    <Route path="product/:id" element={<SingleProduct />} />
                    <Route path="*" element={<RouteNotFound />} />
                </Routes>
                <Footer />
            </div >
        </CartProvider>
    )
}