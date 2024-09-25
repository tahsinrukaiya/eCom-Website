
export default function ProductCard({ product }) {
    return (
        <>
            <div className="card_container">
                <div className="product_card">
                    <div className="product">
                        <div className="product_image">
                            <img src={product.imageUrl} alt={product.title} className="product_image" /></div>
                        <div className="product_title"><h4>{product.title}</h4>
                            <span>{product.price} kr</span></div>
                        <div className="stars">
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <div className="button>"><button className="add_button">Add to Cart</button></div>

                    </div>
                </div>
            </div>
        </>
    )
}




