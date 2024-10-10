import { useEffect, useState } from 'react';
import ProductCard from '../ProductCard';
import SearchBar from '../SearchBar';

export default function Home() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                setIsError(false);
                setIsLoading(true);
                const response = await fetch(`${import.meta.env.VITE_BASE_URL}`);
                const json = await response.json();
                setData(json.data);
                console.log(json);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setIsLoading(false);
                setIsError(true);
            }
        }

        fetchData();
    }, []);

    if (isLoading) {
        return <div>Loading products...</div>;
    }

    if (isError) {
        return <div>Error loading data...</div>;
    }

    return (
        <div>
            <SearchBar data={data} />
            <h1 className="heading_one">All Products</h1>
            <ProductCard data={data} baseURL={import.meta.env.VITE_BASE_URL} />
        </div>
    );
}
