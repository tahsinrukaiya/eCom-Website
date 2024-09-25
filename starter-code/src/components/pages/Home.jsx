import ProductCard from "../ProductCard";
import { useEffect, useState } from 'react';

const url = 'https://v2.api.noroff.dev/online-shop';

export default function Home() {
    const [products, setProducts] = useState([]);

    // The useEffect will run once when the component first mounts
    useEffect(() => {
        // Function that gets our posts
        async function getData() {
            const response = await fetch(url);
            const json = await response.json();
            console.log(json);
            // Setting our `posts` state to the API data we received
            setProducts(json);
        }
        getData();
    }, []);

    return (
        <div>
            <h2 className="heading_one">All Products</h2>

            <div className="product-grid">
                {Array.isArray(products) && products.length > 0 ? (
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <p>Loading products...</p>
                )}
            </div>
        </div>
    );
}