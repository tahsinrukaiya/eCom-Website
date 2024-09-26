import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { url } from '../ProductCard';

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
                const response = await fetch(url);
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
        getData(`https://v2.api.noroff.dev/online-shop/${id}`);
    }, [id]);

    if (isLoading || !data) {
        return <div>Loading</div>;
    }

    if (isError) {
        return <div>Error</div>;
    }

    console.log(data);

    return (
        <div>
            <h2>Product Detail</h2>
            <div>id: {data.id}</div>
            <div>title: {data.title}</div>
        </div>
    )
}