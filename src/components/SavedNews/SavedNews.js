import React, { useEffect, useState } from "react";
import NewsCard from "../NewsCard/NewsCard.js";
import { api } from "../../utils/NewsApi.js";
import "../SavedNews/SavedNews.css";

function SavedNews({ code }) {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api
            .getCardList()
            .then((res) => {
                setCards(res);
            })
            .catch(console.log);
    }, []);

    const cardComponents = cards.map((card) => <NewsCard {...card} key={card.id} />);

    return (
        <section className="saved-news">
            <ul className="saved-news__card-list">
                {React.Children.toArray(cardComponents)}
            </ul><div>{code}</div>
        </section >
    )
}

export default SavedNews;

