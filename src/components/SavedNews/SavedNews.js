import React, { useEffect, useState } from "react";
import NewsCard from "../NewsCard/NewsCard.js";
import { api } from "../../utils/Api.js";
import "../SavedNews/SavedNews.css"

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
        <div className="saved-news">
            <h2 className="saved-news__heading">Saved articles</h2>
            <h3 className="saved-news__subheading">Elise, you have 5 saved articles</h3>
            <div className="saved-news__keywords-container">
                <p className="saved-news__keywords">By keywords:</p>
                <p className="saved-news__keywords-items">Nature, Yellowstone, and 2 other</p>
            </div>
            <ul className="saved-news__card-list">
                {React.Children.toArray(cardComponents)}
            </ul><div>{code}</div>
        </div >
    )
}

export default SavedNews;

