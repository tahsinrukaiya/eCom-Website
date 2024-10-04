import { useContext, useState } from 'react';
import { CartContext } from '../CartContext';
import { useNavigate } from 'react-router-dom';

export default function ShoppingCart() {
    const { cart, incrementQuantity, decrementQuantity, clearCart } = useContext(CartContext);
    const [showCheckoutSuccess, setShowCheckoutSuccess] = useState(false);
    const navigate = useNavigate();


    const totalAmount = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    const handleCheckout = () => {
        setShowCheckoutSuccess(true);
        clearCart();
    };

    const closeDialog = () => {
        setShowCheckoutSuccess(false);
    };

    const goToHomePage = () => {
        navigate('/');
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
                                {item.title} - {item.price}kr x {item.quantity}
                                <button className="minus_btn" onClick={() => decrementQuantity(item.id)}>-</button>
                                <button className="plus_btn" onClick={() => incrementQuantity(item.id)}>+</button>
                            </div>
                        ))}
                        <h3>Total: {totalAmount.toFixed(2)}kr</h3>
                        <button className="checkout_btn" onClick={handleCheckout}>Proceed to checkout</button>
                    </div>
                ) : (
                    <p>Your cart is empty</p>
                )}
            </div>

            {showCheckoutSuccess && (
                <div className="checkout_dialog_overlay">
                    <div className="checkout_dialog">
                        <div className="dialog_content">
                            <h2>Checkout Successful!</h2>
                            <p>Thank you for your purchase.</p>
                            <button className="close_btn" onClick={closeDialog}>Close</button>
                            <button className="home_btn" onClick={goToHomePage}>Go to Home Page</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
