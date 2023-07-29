import React from "react";
import SavedNewsCard from "../SavedNewsCard/SavedNewsCard.js";
import "../SavedNews/SavedNews.css";

function SavedNews({ savedArticles }) {
    const [showSavedCards, setShowSavedCards] = React.useState(0);

    function handleShowMoreSavedCards() {
        setShowSavedCards(showSavedCards + 3);
    }

    return (
        <section className="saved-news">
            <ul className="search-results__card-list">
                {""}
                {savedArticles.slice(0, 3 + showCards).map((article) => {
                    return (
                        <SavedNewsCard {...article}
                            key={article._id}
                        />
                    )
                })}
            </ul>
            {showSavedCards < savedArticles.length && (<button type="button" className="saved-news__button" onClick={handleShowMoreSavedCards}>Show more</button>
            )}
        </section >
    )
}

export default SavedNews;

