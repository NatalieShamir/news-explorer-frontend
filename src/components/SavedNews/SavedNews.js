import React, { useEffect, useState } from "react";
import NewsCard from "../NewsCard/NewsCard.js";
import { newsApi } from "../../utils/NewsApi.js";
import "../SavedNews/SavedNews.css";

function SavedNews({ code }) {
    const [savedArticles, setSavedArticles] = useState([]);

    useEffect(() => {
        newsApi//change to mainApi
            .getCardList()
            .then((res) => {
                setSavedArticles(res);
            })
            .catch(console.log);
    }, []);

    const cardComponents = savedArticles.map((card) => <NewsCard {...card} key={card.id} />);

    return (
        <section className="saved-news">
            <ul className="saved-news__card-list">
                {React.Children.toArray(cardComponents)}
            </ul><div>{code}</div>
        </section >
    )
}

export default SavedNews;

