import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export default function SearchBar({ data }) {
    const [value, setValue] = useState("");
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const onChange = (event) => {
        setValue(event.target.value);
        setDropdownOpen(true);
    };

    const onSelectItem = (item) => {
        setValue(item.title);
        setDropdownOpen(false);
        navigate(`/product/${item.id}`);
    };


    const onBlur = () => {
        setTimeout(() => {
            setDropdownOpen(false);
        }, 100);
    };

    const filteredData = data.filter((item) => {
        const searchTerm = value.toLowerCase();
        const title = item.title.toLowerCase();
        return searchTerm && title.startsWith(searchTerm) && title !== searchTerm;
    });

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
                    placeholder="search product"
                    onBlur={onBlur}
                    onFocus={() => setDropdownOpen(true)}
                />

                {isDropdownOpen && filteredData.length > 0 && (
                    <div className="drop_down">
                        {filteredData.map((item) => (
                            <div
                                key={item.id}
                                className="drop_down_row"
                                onMouseDown={() => onSelectItem(item)}
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
