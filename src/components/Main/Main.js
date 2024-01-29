import React from "react";
import Parent from "../Parent/Parent";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import SearchResults from "../SearchResults/SearchResults";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";
import headerLogo from "../../images/header-min.svg";
import hamburgerMenuOpen from "../../images/menu_light.svg";
import hamburgerMenuClose from "../../images/close-min.svg";

function Main({ onSigninClick, isLoggedIn, name, onLogout, onSubmit, isSeacrhProcessing, submitSearch, searchedArticles, keyword, onArticleSave, onAttemptSaveArticleClick, savedArticles }) {
    return (
        <>
            <Parent>
                <Header
                    onSigninClick={onSigninClick}
                    isLoggedIn={isLoggedIn}
                    name={name}
                    onLogout={onLogout}
                    headerLogoSrc={headerLogo}
                    hamburgerMenuOpenSrc={hamburgerMenuOpen}
                    hamburgerMenuCloseSrc={hamburgerMenuClose}
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
                    searchedArticles={searchedArticles}
                    keyword={keyword}
                    onArticleSave={onArticleSave}
                    isLoggedIn={isLoggedIn}
                    onAttemptSaveArticleClick={onAttemptSaveArticleClick}
                    savedArticles={savedArticles}
                />
                )
            }
            <About />
        </>
    )
}

export default Main; 