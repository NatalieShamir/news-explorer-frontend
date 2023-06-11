import React, { useEffect, useState } from "react";
import "../SearchResults/SearchResults.css"
import NewsCard from "../NewsCard/NewsCard";
import { api } from "../../utils/Api.js"

function SearchResults({ code }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getCardList()
      .then((res) => {
        setCards(res);
      })
      .catch(console.log);
  }, []);

  const cardComponents = cards.slice(0, 3).map((card) => <NewsCard {...card} key={card.id} />);

  return (
    <div className="search-results">
      <h2 className="search-results__heading">Search results</h2>
      <ul className="search-results__card-list">
        {React.Children.toArray(cardComponents)}
      </ul><div>{code}</div>
      <button type="button" className="search-results__button">Show more</button>
    </div>
  )
}

export default SearchResults;