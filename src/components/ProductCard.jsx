import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function ProductCard({ data }) {
    if (!data || !Array.isArray(data) || data.length === 0) {
        return <div>No products available.</div>;
    }

    function calculateDiscountPercentage(price, discountedPrice) {
        if (price === discountedPrice) return 0;
        return Math.round(((price - discountedPrice) / price) * 100);
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
                        {product.price !== product.discountedPrice ? (
                            <>
                                <p className="old_price">{product.price}kr</p>
                                <p className="discount_price">Now {product.discountedPrice}kr</p>
                                <p className="discount_percentage">
                                    {calculateDiscountPercentage(product.price, product.discountedPrice)}% off
                                </p>
                            </>
                        ) : (
                            <p className="price">{product.price}kr</p>
                        )}
                        <div className="star-rating" style={{ '--rating': product.rating }}></div>
                    </div>
                    <Link to={`product/${product.id}`}>
                        <button className="view_btn">View Product</button>
                    </Link>
                </div>
            ))}
        </div>
    );
}

ProductCard.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            discountedPrice: PropTypes.number.isRequired,
            image: PropTypes.shape({
                url: PropTypes.string.isRequired,
            }).isRequired,
            rating: PropTypes.number.isRequired,
        })
    ).isRequired,
};
