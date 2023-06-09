import React from "react";
import { Link } from 'react-router-dom';
import "../SavedNewsHeader/SavedNewsHeader.css";
import headerLogo from "../../images/header-min.svg";
import logout from "../../images/logout.svg";

function SavedNewsHeader() {
    return (
        <div className="saved-news-header">
            <img
                className="saved-news-header__image"
                src={headerLogo}
                alt="Project title- NewsExplorer"
            />
            <div className="saved-news-header__container">
                <Link to={"/"} className="saved-news-header__home">
                    Home
                </Link>
                <Link to={"/"} className="saved-news-header__articles">Saved articles</Link>
                <button className="saved-news-header__button">
                    <div className="saved-news-header__button-items">
                        <div className="saved-news-header__user">Elise</div>
                        <img className="saved-news-header__logout"
                            src={logout}
                            alt="logout icon"
                        />
                    </div>
                </button>
            </div>
        </div>
    )
}

export default SavedNewsHeader;