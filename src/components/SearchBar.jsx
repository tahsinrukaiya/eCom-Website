export default function SearchBar() {
    return (
        <div>
            <div className="search_container">
                <form className="search_form">
                    <div className="search_icon"> <i className="fa-solid fa-magnifying-glass"></i></div>
                    <input type="text" className="search_input" placeholder="search..." />
                    <button className="search_btn">Search</button>
                </form>
            </div>
        </div>
    )
}