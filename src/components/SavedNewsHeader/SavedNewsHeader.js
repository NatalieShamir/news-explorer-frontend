import React from "react";
import { useContext } from "react";
import "../SavedNewsHeader/SavedNewsHeader.css";
import { UserContext } from "../../contexts/CurrentUserContext";


function SavedNewsHeader({ savedArticles }) {
    const currentUser = useContext(UserContext);
    const savedArticlesNumber = localStorage.length;
    const keywordsArray = savedArticles.map((article) => article.keyword);

    return (
        <>
            <section className="saved-news-header">
                <h2 className="saved-news-header__heading">Saved articles</h2>
                <h3 className="saved-news-header__subheading">{currentUser.name}, you have {savedArticlesNumber} saved articles</h3>
                <p className="saved-news-header__keywords">By keywords:
                    <span className="saved-news-header__keywords-bold" >Nature, Yellowstone, and 2 other</span>
                </p>
            </section>
        </>
    )
}

export default SavedNewsHeader;