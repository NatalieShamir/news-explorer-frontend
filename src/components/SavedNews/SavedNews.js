import React from "react";
import SavedNewsCard from "../SavedNewsCard/SavedNewsCard.js";
import "../SavedNews/SavedNews.css";

function SavedNews({ savedArticles }) {

    const cardComponents = savedArticles.map((article) => <SavedNewsCard {...article} key={article._id} />);

    return (
        <section className="saved-news">
            <ul className="saved-news__card-list">
                {React.Children.toArray(cardComponents)}
            </ul><div>{savedArticles}</div>
        </section >
    )
}

export default SavedNews;

