import React from "react";
import { Link } from 'react-router-dom';
import "../Navigation/Navigation.css";
import logoutLight from "../../images/logout_light.svg";
import logoutDark from "../../images/logout_dark.svg";

function Navigation({ isNavOpen, onSigninClick, isLoggedIn, name, onLogout, isSavedNews }) {

    return (
        <nav className={`${`nav`} ${isNavOpen ? "nav_open" : ""}`}>
            {isLoggedIn ? (
                <ul className="nav__items">
                    <li className="nav__item">
                        <Link to="/" className={`nav__home ${isSavedNews ? "nav__home_dark" : ""}`}>
                            Home
                        </Link>
                    </li >
                    <li className="nav__item">
                        <Link to="/saved-news" className={`nav__articles ${isSavedNews ? "nav__articles_dark" : ""}`} >Saved articles</Link>
                    </li>
                    <li className="nav__item">
                        <button className="nav__button-signout" onClick={onLogout}>
                            <div className="nav__button-signout-items">
                                <p className={`nav__user ${isSavedNews ? "nav__user_dark" : ""}`} >{name}</p>
                                {isSavedNews ? <img src={logoutDark} alt="" /> : <img src={logoutLight} alt="" />}
                            </div>
                        </button>
                    </li>
                </ul >
            ) : (
                <ul className="nav__items">
                    <li className="nav__item">
                        <Link to="/" className="nav__home">
                            Home
                        </Link>
                    </li >
                    <li className="nav__item">
                        <button className="nav__button-signin" onClick={onSigninClick}>Sign in</button>
                    </li>
                </ul >
            )
            }
        </nav >
    )
}

export default Navigation;