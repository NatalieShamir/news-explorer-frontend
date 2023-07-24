import React from "react";
import Parent from "../Parent/Parent";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import { useLocation } from "react-router-dom";
import SearchResults from "../SearchResults/SearchResults";

function Main({ onSigninClick, isLoggedIn, username, onLogout }) {
    const location = useLocation();
    return (
        <>
            <Parent>
                <Header
                    onSigninClick={onSigninClick}
                    isLoggedIn={isLoggedIn}
                    username={username}
                    onLogout={onLogout}
                />
                <SearchForm />
            </Parent>
            {!location.pathname === "/articles" &&
                <SearchResults />}
            <About />
        </>
    )
}

export default Main; 