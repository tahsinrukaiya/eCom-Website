import ProductCard from "../ProductCard";
import SearchBar from "../SearchBar";

export default function Home() {

    return (
        <div>
            <SearchBar />
            <h1 className="heading_one">All Products</h1>
            <ProductCard />
        </div >
    );
}