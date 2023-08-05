import React from "react";
import "../SavedNewsHeader/SavedNewsHeader.css";

function SavedNewsHeader({ }) {
    const savedArticlesNumber = localStorage.length;
    return (
        <>
            <section className="saved-news-header">
                <h2 className="saved-news-header__heading">Saved articles</h2>
                <h3 className="saved-news-header__subheading">Elise, you have {savedArticlesNumber} saved articles</h3>
                <p className="saved-news-header__keywords">By keywords:
                    <span className="saved-news-header__keywords-bold" >Nature, Yellowstone, and 2 other</span>
                </p>
            </section>
        </>
    )
}

export default SavedNewsHeader;