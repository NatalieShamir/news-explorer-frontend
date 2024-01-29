import React from "react";
import SavedNewsCard from "../SavedNewsCard/SavedNewsCard.js";
import "../SavedNews/SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader.js";
import Header from "../Header/Header.js";
import savedNewsHeaderLogo from "../../images/NewsExplorer-min.svg";
import savedNewsHamburgerMenuOpen from "../../images/menu_dark.svg";
import savedNewsHamburgerMenuClose from "../../images/close-min.svg";

function SavedNews({ savedArticles, onArticleDelete, isLoggedIn, name, onLogout }) {
    const [isSavedNews, setIsSavedNews] = React.useState(true);//eslint-disable-line no-unused-vars

    return (
        <>
            <Header
                name={name}
                onLogout={onLogout}
                isLoggedIn={isLoggedIn}
                headerLogoSrc={savedNewsHeaderLogo}
                hamburgerMenuOpenSrc={savedNewsHamburgerMenuOpen}
                hamburgerMenuCloseSrc={savedNewsHamburgerMenuClose}
                isSavedNews={isSavedNews}
            />
            <SavedNewsHeader
                savedArticles={savedArticles}
                name={name}
            />
            <section className="saved-news">
                <ul className="saved-news__card-list">
                    {" "}
                    {savedArticles.map((savedArticle) => {
                        return (
                            <SavedNewsCard
                                savedArticle={savedArticle}
                                key={savedArticle.title + savedArticle.date}
                                cardImage={savedArticle.image}
                                date={savedArticle.date}
                                title={savedArticle.title}
                                text={savedArticle.text}
                                website={savedArticle.source}
                                isLoggedIn={isLoggedIn}
                                onArticleDelete={onArticleDelete}
                            />
                        )
                    })}
                </ul>
            </section >
        </>
    )
}

export default SavedNews;

