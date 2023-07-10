import React from "react";
import { Link } from 'react-router-dom';
import "../Navigation/Navigation.css";

function Navigation({ isNavOpen, onSigninClick }) {

    return (
        <nav className={`${`nav`} ${isNavOpen ? "nav_open" : ""}`}>
            <ul className="nav__items">
                <li className="nav__item">
                    <Link to={"/"} className="nav__home">
                        Home
                    </Link>
                </li>
                <li className="nav__item">
                    <button className="nav__button-signin" onClick={onSigninClick}>Sign in</button>
                </li>
            </ul>
        </nav >
    )
}

export default Navigation;