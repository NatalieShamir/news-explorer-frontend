import React, { useEffect, useState } from "react";
import NewsCard from "../NewsCard/NewsCard.js";
import { api } from "../../utils/Api.js";
import "../SavedNews/SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader.js";

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
        <>
            <SavedNewsHeader />
            <section className="saved-news">
                <h2 className="saved-news__heading">Saved articles</h2>
                <h3 className="saved-news__subheading">Elise, you have 5 saved articles</h3>
                <p className="saved-news__keywords">By keywords:
                    <span className="saved-news__keywords-bold" style={{ fontWeight: 'bold' }}>Nature, Yellowstone, and 2 other</span>
                </p>
                <ul className="saved-news__card-list">
                    {React.Children.toArray(cardComponents)}
                </ul><div>{code}</div>
            </section >
        </>
    )
}

export default SavedNews;

