import React from "react";
import Card from "../Card/Card";


function SavedNewsCard({ cardImage, title, text, website, onArticleDelete, savedArticle, isLoggedIn }) {
    const [isToolTipVisible, setIsToolTipVisible] = React.useState(false);

    function handleDeleteClick() {
        onArticleDelete(savedArticle);
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
                <button type="button" className="card__button-delete"
                    onMouseEnter={() => setIsToolTipVisible(true)}
                    onMouseLeave={() => setIsToolTipVisible(false)}
                    onClick={handleDeleteClick}>
                </button>
                {isToolTipVisible && (
                    <div className="card__tooltip"><span className="card__tooltip-text">Remove from saved</span>
                    </div>
                )}
                {isLoggedIn && (
                    <div className="card__keyword">{savedArticle.keyword}</div>
                )}
            </Card>
        </>
    )
}

export default SavedNewsCard;