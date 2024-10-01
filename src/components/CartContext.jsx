import { createContext, useState } from "react";
import PropTypes from 'prop-types';  // Import PropTypes

// Create the context
export const CartContext = createContext();

// Create the provider component
export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    // Function to add item to cart or update quantity if it exists
    const addToCart = (item) => {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            setCart(cart.map(cartItem =>
                cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            ));
        } else {
            setCart([...cart, { ...item, quantity: 1 }]);
        }
    };

    // Function to increase item quantity
    const incrementQuantity = (id) => {
        setCart(cart.map(item =>
            item.id === id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        ));
    };

    // Function to decrease item quantity
    const decrementQuantity = (id) => {
        const updatedCart = cart.map(item =>
            item.id === id
                ? { ...item, quantity: item.quantity - 1 }
                : item
        ).filter(item => item.quantity > 0); // Filter out items with quantity 0

        setCart(updatedCart);
    };


    // Function to clear the cart
    const clearCart = () => {
        setCart([]); // This will empty the cart
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, incrementQuantity, decrementQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}

// PropTypes validation
CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
