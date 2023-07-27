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
        {searchedArticles.slice(0, 3 + showCards).map((article) => {
          return (
            <NewsCard {...article}
              key={article._id}
              cardImage={article.urlToImage}
              date={article.publishedAt}
              title={article.title}
              text={article.description}
              website={article.source.name}
            />
          )
        })}
      </ul>
      {showCards < searchedArticles.length && (<button type="button" className="search-results__button" onClick={handleShowMore}>Show more</button>
      )}
    </section >
  )
}

export default SearchResults;
