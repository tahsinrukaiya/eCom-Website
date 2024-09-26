//import { Link, } from 'react-router-dom';
import { useEffect, useState } from 'react';
export const url = 'https://v2.api.noroff.dev/online-shop';

export default function ProductCard() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                // Reset the error state in case there as an error previously
                setIsError(false);
                // Turn on the loading state each time we do an API call
                setIsLoading(true);
                const response = await fetch(url);
                const json = await response.json();
                setData(json.data);
                console.log(json.data);
                // Clear the loading state once we've successfully got our data
                setIsLoading(false);
            } catch (error) {
                // Clear the loading state if we get an error and then
                // set our error state to true
                console.error("Error fetching data:", error);
                setIsLoading(false);
                setIsError(true);
            }
        }

        fetchData();
    }, []);

    if (isLoading) {
        return <div>Loading products</div>;
    }

    if (isError) {
        return <div>Error loading data</div>;
    }
    return (
        <>
            <div className="card_container">
                {data.map((product) => (
                    <div className="product_card" key={product.id}>
                        <img src={product.image.url} alt={product.title} className="product_img" />
                        <div><h4 className="product_title">{product.title}</h4></div>
                        <div><p className="product_price">{product.price}kr</p></div>

                        <button className="view_btn">View Product</button>
                    </div>
                ))}
            </div>
        </>
    );

}





