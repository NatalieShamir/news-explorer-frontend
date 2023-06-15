import React from "react";
import { NavLink } from 'react-router-dom';
import "../SavedNewsHeader/SavedNewsHeader.css";
import savedNewsHeaderLogo from "../../images/saved-news-header-logo.svg";
import logout from "../../images/logout.svg";

function SavedNewsHeader() {
    return (
        <div className="saved-news-header">
            <NavLink to={"/"} className="saved-news-header__logo">
                <img
                    src={savedNewsHeaderLogo}
                    alt="Project title- NewsExplorer"
                />
            </NavLink>

            <div className="saved-news-header__container">
                <NavLink to={"/"} className="saved-news-header__home">
                    Home
                </NavLink>
                <NavLink to={"/saved-news"} className="saved-news-header__articles">Saved articles</NavLink>
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