import React from "react";
import Parent from "../Parent/Parent";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import { useLocation } from "react-router-dom";
import SearchResults from "../SearchResults/SearchResults";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";

function Main({ onSigninClick, isLoggedIn, username, onLogout, onSubmit, isSeacrhProcessing, submitSearch, searchedArticles }) {
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
                <SearchForm
                    onSubmit={onSubmit}
                />
            </Parent>
            {isSeacrhProcessing ?
                <Preloader /> : null
            }
            {submitSearch && (searchedArticles.length <= 0) ?
                <NotFound />
                :
                (submitSearch && <SearchResults
                    searchedArticles={searchedArticles} />)
            }
            <About />
        </>
    )
}

export default Main; 