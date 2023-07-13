/* import React from "react";
import Parent from "../Parent/Parent";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About"; */
import Header from "../Header/Header";
import SavedNews from "../SavedNews/SavedNews";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";


function Main({ onSigninClick, isLoggedIn }) {
    return (
        <>
            {/* <Parent>
                <SearchForm />
            </Parent>
            <About /> */}
            <Header
                onSigninClick={onSigninClick}
                isLoggedIn={isLoggedIn}
            />
            <SavedNewsHeader />
            <SavedNews />
        </>
    )
}

export default Main; 