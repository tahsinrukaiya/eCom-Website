// ShoppingCart.jsx
import { useContext } from 'react';
import { CartContext } from '../CartContext'; // Adjust the path if needed

export default function ShoppingCart() {
    const { cart, incrementQuantity, decrementQuantity } = useContext(CartContext);
    // Calculate the total amount
    const totalAmount = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);


    return (
        <div className="heading_one">
            <h1>Your Cart</h1>
            {cart.length > 0 ? (
                <div className="item_container">
                    {cart.map((item) => (
                        <div className="items" key={item.id}>
                            {item.title} - ${item.price} x {item.quantity}
                            <button className="minus_btn" onClick={() => decrementQuantity(item.id)}>-</button>
                            <button className="plus_btn" onClick={() => incrementQuantity(item.id)}>+</button>
                        </div>
                    ))}
                    <h3>Total: ${totalAmount.toFixed(2)}</h3>
                    <button className="checkout_btn">Proceed to checkout</button>
                </div>
            ) : (
                <p>Your cart is empty</p>
            )}
        </div>
    );
}
