import React from "react";
import "../NewsCard/NewsCard.css";

function NewsCard({ cardImage, date, title, text, website }) {

    return (
        <div className="card">
            <img src={cardImage} className="card__image " alt="news card" />
            <button type="button" className="card__button"></button>
            <button type="submit" className="card__tooltip">Sign in to save articles</button>
            <div className="card__container">
                <p className="card__date">{date}</p>
                <h2 className="card__title">{title}</h2>
                <p className="card__text">{text}</p>
                <p className="card__website">{website}</p>
            </div>
        </div>
    )
}

export default NewsCard;