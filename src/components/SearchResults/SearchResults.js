import React from "react";
import "../SearchResults/SearchResults.css"
import NewsCard from "../NewsCard/NewsCard";

function SearchResults({ searchedArticles }) {
  const [showCards, setShowCards] = React.useState(0);

  function handleShowMore() {
    setShowCards(showCards + 3);
  }

  return (
    <section className="search-results">
      <h2 className="search-results__heading">Search results</h2>
      <ul className="search-results__card-list">
        {""}
        {searchedArticles.slice(0, 3 + showCards).map((card) => {
          return (
            <NewsCard {...card} key={card._id} />
          )
        })}
      </ul>
      {showCards < searchedArticles.length && (<button type="button" className="search-results__button" onClick={handleShowMore}>Show more</button>
      )}
    </section >
  )
}

export default SearchResults;
