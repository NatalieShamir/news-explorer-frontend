import React from "react";
import SavedNewsCard from "../SavedNewsCard/SavedNewsCard.js";
import "../SavedNews/SavedNews.css";
import LoggedinHeader from "../LoggedinHeader/LoggedinHeader.js";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader.js";

function SavedNews({ savedArticles, onArticleDelete, isLoggedIn, name, onLogout }) {
    return (
        <>
            <LoggedinHeader
                name={name}
                onLogout={onLogout}
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

