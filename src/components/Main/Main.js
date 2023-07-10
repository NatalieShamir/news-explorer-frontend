import React from "react";
import Parent from "../Parent/Parent";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import SavedNews from "../SavedNews/SavedNews";


function Main({ onSigninClick }) {
    return (
        <>
            <Parent>
                <Header
                    onSigninClick={onSigninClick}
                />
                <SearchForm />
            </Parent>
            <About />
            <SavedNews />
        </>
    )
}

export default Main; 