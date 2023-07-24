import React, { useEffect, useState } from "react";
import "../SearchResults/SearchResults.css"
import NewsCard from "../NewsCard/NewsCard";
import { newsApi } from "../../utils/NewsApi";

function SearchResults({ code }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    newsApi
      .getCardList()
      .then((res) => {
        setCards(res);
      })
      .catch(console.log);
  }, []);

  const cardComponents = cards.slice(0, 3).map((card) => <NewsCard {...card} key={card.id} />);

  return (
    <section className="search-results">
      <h2 className="search-results__heading">Search results</h2>
      <ul className="search-results__card-list">
        {React.Children.toArray(cardComponents)}
      </ul><div>{code}</div>
      <button type="button" className="search-results__button">Show more</button>
    </section>
  )
}

export default SearchResults;
