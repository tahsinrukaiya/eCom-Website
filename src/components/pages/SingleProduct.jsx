import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from "../CartContext";

export default function SingleProduct() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    let { id } = useParams();
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        async function getData() {
            try {
                setIsError(false);
                setIsLoading(true);
                const response = await fetch(`${import.meta.env.VITE_BASE_URL}/${id}`);
                const json = await response.json();
                setData(json.data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setIsLoading(false);
                setIsError(true);
            }
        }
        getData();
    }, [id]);

    function calculateDiscountPercentage(price, discountedPrice) {
        if (price === discountedPrice) return 0;
        return Math.round(((price - discountedPrice) / price) * 100);
    }

    if (isLoading || !data) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading product data.</div>;
    }

    const handleAddToCart = () => {
        console.log("Add to cart button clicked!");
        addToCart(data);
        alert("Item is added to the cart!");
    };

    const discountPercentage = calculateDiscountPercentage(data.price, data.discountedPrice);

    return (
        <>
            <div className="heading_one"><h1>Product Detail</h1></div>
            <div className="product_container">
                <div className="product_image">
                    <img src={data.image.url} alt={data.image.alt || "Product image"} />
                </div>
                <div className="product_detail">
                    <div><h2>{data.title}</h2></div>
                    <div>
                        {data.price !== data.discountedPrice ? (
                            <>
                                <h5 className="old_price">{data.price}kr</h5>
                                <h5 className="discount_price">Now: {data.discountedPrice}kr</h5>
                                <p className="discount_percentage">{discountPercentage}% off</p>
                            </>
                        ) : (
                            <h5>{data.price}kr</h5>
                        )}
                    </div>
                    <div><p>{data.description}</p></div>
                    <button className="add_btn" onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>

            <div className="reviews_section">
                <h3>Customer Reviews</h3>
                {data.reviews && data.reviews.length > 0 ? (
                    data.reviews.map(review => (
                        <div className="review" key={review.id}>
                            <h4>{review.username}</h4>
                            <p>Rating: {review.rating} ⭐</p>
                            <p>{review.description}</p>
                        </div>
                    ))
                ) : (
                    <p className="no_review">No reviews available.</p>
                )}
            </div>
        </>
    );
}
