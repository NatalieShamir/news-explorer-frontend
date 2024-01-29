import React from "react";
import "../SearchForm/SearchForm.css";

function SearchForm({ onSubmit }) {

    const [searchWord, setSearchWord] = React.useState("");
    const [placeholder, setPlaceholder] = React.useState("Enter topic");

    function handleInput(e) {
        setSearchWord(e.target.value);

    }

    function handleSubmit(e) {
        e.preventDefault();
        searchWord === "" && setPlaceholder("Please enter a keyword");
        onSubmit(searchWord)
    }

    return (
        <div className="search">
            <form className="search__form" onSubmit={handleSubmit}>
                <h1 className="search__form-heading">What's going on in the world?</h1>
                <p className="search__form-text">Find the latest news on any topic and save them in your personal account.</p>
                <div className="search__form-field-container">
                    <input
                        onChange={handleInput}
                        type="search"
                        id="search"
                        className="search__form-input"
                        placeholder={placeholder}
                        value={searchWord}
                    />
                    <button type="submit" className="seacrh__form-button">Search</button>
                </div>
            </form>
        </div>
    )
}

export default SearchForm;