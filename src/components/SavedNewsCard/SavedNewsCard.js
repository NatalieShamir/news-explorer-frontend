import React from "react";

function SavedNewsCard({ cardImage, title, text, website }) {
    const [isToolTipVisible, setIsToolTipVisible] = React.useState(false);
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    return (
        <div className="saved-news-card">
            <img src={cardImage} className="saved-news-card__image " alt="saved news card" />
            <button type="button" className="saved-news-card__delete-button"
                onMouseEnter={() => setIsToolTipVisible(true)}
                onMouseLeave={() => setIsToolTipVisible(false)}>
            </button>
            {isToolTipVisible && (
                <button type="submit" className="saved-news-card__tooltip">Remove from saved
                </button>
            )}
            <div className="saved-news-card__container">
                <p className="saved-news-card__date">{formattedDate}</p>
                <h2 className="saved-news-card__title">{title}</h2>
                <p className="saved-news-card__text">{text}</p>
                <p className="saved-news-card__website">{website}</p>
            </div>
        </div>
    )
}

export default SavedNewsCard;