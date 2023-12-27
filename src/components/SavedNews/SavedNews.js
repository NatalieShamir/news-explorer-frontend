import React from "react";
import SavedNewsCard from "../SavedNewsCard/SavedNewsCard.js";
import "../SavedNews/SavedNews.css";
import Header from "../Header/Header.js";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader.js";

function SavedNews({ savedArticles, onArticleDelete, isLoggedIn, name }) {
    const [showSavedCards, setShowSavedCards] = React.useState(0);

    function handleShowMoreSavedCards() {
        setShowSavedCards(showSavedCards + 3);
    }

    return (
        <>
            <Header />
            <SavedNewsHeader savedArticles={savedArticles}
                name={name}
            />
            <section className="saved-news">
                <ul className="saved-news__card-list">
                    {savedArticles.map((savedArticle) => {
                        return (
                            <SavedNewsCard
                                savedArticle={savedArticle}
                                key={savedArticle.title + savedArticle.publishedAt}
                                cardImage={savedArticle.urlToImage}
                                date={savedArticle.publishedAt}
                                title={savedArticle.title}
                                text={savedArticle.description}
                                website={savedArticle.source.name}
                                isLoggedIn={isLoggedIn}
                                onCardDelete={onArticleDelete}
                            />
                        )
                    })}
                </ul>
                {showSavedCards < savedArticles.length && (<button type="button" className="saved-news__button" onClick={handleShowMoreSavedCards}>Show more</button>
                )}
            </section >
        </>
    )
}

export default SavedNews;

