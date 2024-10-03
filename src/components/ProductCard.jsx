import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import PropTypes

export default function ProductCard({ data }) { // Accept data as a prop

    // Check if data is valid
    if (!data || !Array.isArray(data) || data.length === 0) {
        return <div>No products available.</div>; // Handle empty data case
    }

    return (
        <div className="card_container">
            {data.map((product) => (
                <div className="product_card" key={product.id}>
                    <Link to={`product/${product.id}`}>
                        <img src={product.image.url} alt={product.title} className="product_img" />
                    </Link>
                    <h4 className="product_title">{product.title}</h4>
                    <div>
                        <p className="product_price">{product.price}kr</p>
                    </div>
                    <Link to={`product/${product.id}`}>
                        <button className="view_btn">View Product</button>
                    </Link>
                </div>
            ))}
        </div>
    );
}

// Add prop types validation
ProductCard.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            image: PropTypes.shape({
                url: PropTypes.string.isRequired,
            }).isRequired,
        })
    ).isRequired,
};
