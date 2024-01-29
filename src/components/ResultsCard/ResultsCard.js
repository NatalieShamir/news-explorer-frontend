import React from "react";
import Card from "../Card/Card";


function ResultsCard({ searchedArticle, onArticleSave, cardImage, title, text, website, isLoggedIn, onAttemptSaveArticleClick, isSaved }) {
    const [isToolTipVisible, setIsToolTipVisible] = React.useState(false);

    function handleSaveArticleClick() {
        onArticleSave(searchedArticle)
    }

    return (
        <>
            <Card
                cardImage={cardImage}
                title={title}
                text={text}
                website={website}
            >
                {" "}
                {
                    isLoggedIn ? (
                        <button type="button" className={`${isSaved ? "card__button-save-article_marked" : "card__button-save-article"}`}
                            onClick={handleSaveArticleClick} />
                    ) : (
                        <button type="button" className="card__button-save-article"
                            onMouseEnter={() => setIsToolTipVisible(true)}
                            onMouseLeave={() => setIsToolTipVisible(false)}
                            onClick={onAttemptSaveArticleClick}
                        />
                    )
                }
                {
                    isToolTipVisible && (
                        <div className="card__tooltip"><span>Sign in to save articles</span>
                        </div>
                    )
                }
            </Card >
        </>
    )
}

export default ResultsCard;