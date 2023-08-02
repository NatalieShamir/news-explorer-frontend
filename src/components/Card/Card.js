import React from "react";
import "../Card/Card.css";

function Card({ children, cardImage, title, text, website }) {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    return (
        <div className="card">
            {children}
            <img src={cardImage} className="card__image " alt="news article card" />
            <div className="card__container">
                <p className="card__date">{formattedDate}</p>
                <h2 className="card__title">{title}</h2>
                <p className="card__text">{text}</p>
                <p className="card__website">{website}</p>
            </div>
        </div>
    )
}

export default Card;