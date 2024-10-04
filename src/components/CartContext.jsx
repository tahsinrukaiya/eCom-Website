import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

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

    const incrementQuantity = (id) => {
        setCart(cart.map(item =>
            item.id === id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        ));
    };

    const decrementQuantity = (id) => {
        const updatedCart = cart.map(item =>
            item.id === id
                ? { ...item, quantity: item.quantity - 1 }
                : item
        ).filter(item => item.quantity > 0);

        setCart(updatedCart);
    };
    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, incrementQuantity, decrementQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
