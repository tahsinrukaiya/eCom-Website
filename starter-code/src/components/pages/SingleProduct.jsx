import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function SingleProduct() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    let { id } = useParams();

    useEffect(() => {
        async function getData() {
            try {
                setIsError(false);
                setIsLoading(true);
                const response = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
                const json = await response.json();
                setData(json.data);
                console.log(json.data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setIsLoading(false);
                setIsError(true);
            }
        }
        getData();
    }, [id]);

    if (isLoading || !data) {
        return <div>Loading</div>;
    }

    if (isError) {
        return <div>Error</div>;
    }

    return (
        <>
            <div className="heading_one"> <h2>Product Detail</h2></div>
            <div className="product_container">
                <div className="product_image">
                    <img src={data.image.url} alt={data.image.alt || "Product image"} />
                </div>
                <div className="product_detail">
                    <div><h4>{data.title}</h4></div>
                    <div><h5>{data.price}</h5></div>

                    <div><p>{data.description}</p></div>
                    <button className="add_btn">Add to Cart</button>
                </div>


            </div>
        </>
    )
}