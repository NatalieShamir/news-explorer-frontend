import React from "react";
import "../NewsCard/NewsCard.css"

function NewsCard(props) {
    return (
        <div className="card">
            <img src={props.cardImage} className="card__image" alt="news card" />
            <button className="card__button"></button>
            <div className="card__container">
                <p className="card__date">{props.date}</p>
                <h2 className="card__title">{props.title}</h2>
                <p className="card__text">{props.text}</p>
                <p className="card__website">{props.website}</p>
            </div>

        </div>
    )
}

export default NewsCard;