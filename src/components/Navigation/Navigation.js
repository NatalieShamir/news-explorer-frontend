import React from "react";
import { Link } from 'react-router-dom';
import headerLogo from "../../images/header-min.svg";
import "../Navigation/Navigation.css";

function Navigation() {
    return (
        <nav className="nav">
            <Link to={"/"} className="nav__logo">
                <img
                    className="nav__logo-image"
                    src={headerLogo}
                    alt="Project title- NewsExplorer"
                />
            </Link>
            <ul className="nav__items">
                <li className="nav__item">
                    <Link to={"/"} className="nav__home">
                        Home
                    </Link>
                </li>
                <li className="nav__item">
                    <button className="nav__button-signin">Sign in</button>
                </li>
                <li className="nav__item">
                    <button className="nav__button-menu"></button>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;