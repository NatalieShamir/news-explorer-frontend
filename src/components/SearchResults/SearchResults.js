import React from "react";
import "../SearchResults/SearchResults.css"
import NewsCard from "../NewsCard/NewsCard";

function SearchResults({ searchedArticles }) {
  const [showCards, setShowCards] = React.useState(0);

  function handleShowMoreCards() {
    setShowCards(showCards + 3);
  }

  return (
    <section className="search-results">
      <h2 className="search-results__heading">Search results</h2>
      <ul className="search-results__card-list">
        {""}
        {searchedArticles.slice(0, 3 + showCards).map((searchedArticle) => {
          return (
            <NewsCard {...searchedArticle}
              key={searchedArticle._id}
              cardImage={searchedArticle.urlToImage}
              date={searchedArticle.publishedAt}
              title={searchedArticle.title}
              text={searchedArticle.description}
              website={searchedArticle.source.name}
            />
          )
        })}
      </ul>
      {showCards < searchedArticles.length && (<button type="button" className="search-results__button" onClick={handleShowMoreCards}>Show more</button>
      )}
    </section >
  )
}

export default SearchResults;
