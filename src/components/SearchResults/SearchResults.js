import React from "react";
import "../SearchResults/SearchResults.css"
import ResultsCard from "../ResultsCard/ResultsCard";

function SearchResults({ searchedArticles, onArticleSave, isLoggedIn }) {
  const [showCards, setShowCards] = React.useState(0);

  function handleShowMoreCards() {
    setShowCards(showCards + 3);
  }

  return (
    <section className="search-results">
      <h2 className="search-results__heading">Search results</h2>
      <ul className="search-results__card-list">
        {searchedArticles.slice(0, 3 + showCards).map((searchedArticle) => {
          return (
            <ResultsCard {...searchedArticle}
              key={searchedArticle._id}
              searchedArticle={searchedArticle}
              cardImage={searchedArticle.urlToImage}
              date={searchedArticle.publishedAt}
              title={searchedArticle.title}
              text={searchedArticle.description}
              website={searchedArticle.source.name}
              onArticleSave={onArticleSave}
              isLoggedIn={isLoggedIn}
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
