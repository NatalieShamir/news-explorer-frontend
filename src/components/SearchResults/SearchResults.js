import React from "react";
import "../SearchResults/SearchResults.css"
import NewsCard from "../NewsCard/NewsCard";

function SearchResults({ cards }) {

  const cardComponents = cards.slice(0, 3).map((card) => <NewsCard {...card} key={card.id} />);

  return (
    <section className="search-results">
      <h2 className="search-results__heading">Search results</h2>
      <ul className="search-results__card-list">
        {React.Children.toArray(cardComponents)}
      </ul><div>{cards}</div>
      <button type="button" className="search-results__button">Show more</button>
    </section>
  )
}

export default SearchResults;
