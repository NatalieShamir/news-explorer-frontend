import React from "react";
import "../SavedNewsHeader/SavedNewsHeader.css";

function SavedNewsHeader({ savedArticles, name }) {
    if (!savedArticles || savedArticles.length === 0) {
        return (
            <section className="saved-news-header">
                <h2 className="saved-news-header__heading">Saved articles</h2>
                <h3 className="saved-news-header__subheading">{name}, you have 0 saved articles</h3>
            </section>
        );
    }

    const savedArticlesNumber = savedArticles.length;
    const keywordsArray = savedArticles.map((article) => article.keyword);

    let keywordsCount = {};

    for (let keyword of keywordsArray) {
        if (keywordsCount[keyword]) {
            keywordsCount[keyword]++;
        } else {
            keywordsCount[keyword] = 1;
        }
    }

    let keywordsCountArray = [];
    for (let keyword in keywordsCount) {
        keywordsCountArray.push({ keyword: keyword, count: keywordsCount[keyword] });
    }

    const keywordsDescending = keywordsCountArray
        .sort((a, b) => b.count - a.count)
        .map((element) => element.keyword);

    let displayKeywords = "";

    let keywordsShown = "";

    if (keywordsDescending.length > 1) {
        keywordsShown = `${keywordsDescending[0]}, ${keywordsDescending[1]}`;
    } else if (keywordsDescending.length === 1) {
        keywordsShown = keywordsDescending[0];
    }

    const diff = keywordsDescending.filter((x) => !keywordsShown.includes(x));

    const remainingKeywordsCount = diff.length;

    if (keywordsDescending.length > 1) {
        displayKeywords = keywordsShown;

        if (remainingKeywordsCount > 0) {
            displayKeywords += ` and ${remainingKeywordsCount} other`;
        }
    } else {
        displayKeywords = keywordsShown;
    }

    return (
        <section className="saved-news-header">
            <h2 className="saved-news-header__heading">Saved articles</h2>
            <h3 className="saved-news-header__subheading">{name}, you have {savedArticlesNumber} saved articles</h3>
            <p className="saved-news-header__keywords">
                By keywords:&nbsp;
                <span className="saved-news-header__keywords-bold">{displayKeywords}</span>
            </p>
        </section>
    );
}

export default SavedNewsHeader;
