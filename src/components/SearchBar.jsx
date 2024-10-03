import { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

export default function SearchBar({ data }) {
    const [value, setValue] = useState("");
    const [isDropdownOpen, setDropdownOpen] = useState(false); // State to control dropdown visibility

    const onChange = (event) => {
        setValue(event.target.value);
        setDropdownOpen(true); // Open dropdown on input change
    };

    const onSearch = (searchTerm) => {
        setValue(searchTerm);
        setDropdownOpen(false); // Close dropdown after selecting an item
        console.log("search", searchTerm);
    };

    const filteredData = data.filter((item) => {
        const searchTerm = value.toLowerCase();
        const title = item.title.toLowerCase();
        return searchTerm && title.startsWith(searchTerm) && title !== searchTerm;
    });
    console.log(data);
    console.log(filteredData);
    return (
        <div className="search_container">
            <form className="search_form" onSubmit={(e) => e.preventDefault()}>
                <div className="search_icon">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <input
                    type="text"
                    className="search_input"
                    value={value}
                    onChange={onChange}
                    placeholder="search..."
                    onBlur={() => setDropdownOpen(false)}
                    onFocus={() => setDropdownOpen(true)}
                />
                <button className="search_btn" type="button" onClick={() => onSearch(value)}>
                    Search
                </button>
                {isDropdownOpen && filteredData.length > 0 && (
                    <div className="drop_down">
                        {filteredData.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => onSearch(item.title)}
                                className="drop_down_row"
                            >
                                {item.title}
                            </div>
                        ))}
                    </div>
                )}
            </form>
        </div>
    );
}

// Add prop types validation
SearchBar.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
};
