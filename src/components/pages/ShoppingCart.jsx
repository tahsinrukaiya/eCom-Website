// ShoppingCart.jsx
import { useContext, useState } from 'react';
import { CartContext } from '../CartContext';
import { useNavigate } from 'react-router-dom';

export default function ShoppingCart() {
    const { cart, incrementQuantity, decrementQuantity, clearCart } = useContext(CartContext);
    const [showCheckoutSuccess, setShowCheckoutSuccess] = useState(false); // State for the dialog box
    const navigate = useNavigate(); // Initialize the useNavigate hook

    // Calculate the total amount
    const totalAmount = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    // Function to handle checkout button click
    const handleCheckout = () => {
        // Display the success dialog box
        setShowCheckoutSuccess(true);
        // Clear the cart after proceeding to checkout
        clearCart();
    };

    // Function to close the dialog box
    const closeDialog = () => {
        setShowCheckoutSuccess(false);
    };

    // Function to navigate to home page
    const goToHomePage = () => {
        navigate('/'); // Navigates to the home page ("/")
    };

    return (
        <div className="heading_one">
            <div className="wrapper">
                <h1>Your Cart</h1>
                {cart.length > 0 ? (
                    <div className="item_container">
                        {cart.map((item) => (
                            <div className="items" key={item.id}>
                                <div className="item_photo"> <img src={item.image.url} alt="itemPhoto" /></div>
                                {item.title} - ${item.price} x {item.quantity}
                                <button className="minus_btn" onClick={() => decrementQuantity(item.id)}>-</button>
                                <button className="plus_btn" onClick={() => incrementQuantity(item.id)}>+</button>
                            </div>
                        ))}
                        <h3>Total: ${totalAmount.toFixed(2)}</h3>
                        <button className="checkout_btn" onClick={handleCheckout}>Proceed to checkout</button>
                    </div>
                ) : (
                    <p>Your cart is empty</p>
                )}
            </div>

            {/* Checkout Success Dialog (Overlay) */}
            {showCheckoutSuccess && (
                <div className="checkout_dialog_overlay">
                    <div className="checkout_dialog">
                        <div className="dialog_content">
                            <h2>Checkout Successful!</h2>
                            <p>Thank you for your purchase.</p>
                            <button className="close_btn" onClick={closeDialog}>Close</button>
                            {/* Go to Home Page Button */}
                            <button className="home_btn" onClick={goToHomePage}>Go to Home Page</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
