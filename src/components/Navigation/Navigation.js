import React from "react";
import { Link } from 'react-router-dom';
import "../Navigation/Navigation.css";
import logout from "../../images/logout.svg";

function Navigation({ isNavOpen, onSigninClick, isLoggedIn, username }) {

    return (
        <nav className={`${`nav`} ${isNavOpen ? "nav_open" : ""}`}>
            {isLoggedIn ? (
                <ul className="nav__items">
                    <li className="nav__item">
                        <Link to={"/"} className="nav__home_dark">
                            Home
                        </Link>
                    </li >
                    <li className="nav__item">
                        <Link to={"/saved-news"} className="nav__articles">Saved articles</Link>
                    </li>
                    <li className="nav__item">
                        <button className="nav__button-signout">
                            <div className="nav__button-signout-items">
                                <div className="nav__user">{username}</div>
                                <img className="nav__logout"
                                    src={logout}
                                    alt="logout icon"
                                />
                            </div>
                        </button>
                    </li>
                </ul >
            ) : (
                <ul className="nav__items">
                    <li className="nav__item">
                        <Link to={"/"} className="nav__home">
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