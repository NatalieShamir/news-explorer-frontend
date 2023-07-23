import React from "react";
import Parent from "../Parent/Parent";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";


function Main({ onSigninClick, isLoggedIn, username }) {
    return (
        <>
            <Parent>
                <Header
                    onSigninClick={onSigninClick}
                    isLoggedIn={isLoggedIn}
                    username={username}
                />
                <SearchForm />
            </Parent>
            <About />
        </>
    )
}

export default Main; 