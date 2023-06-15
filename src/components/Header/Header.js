import headerLogo from "../../images/header-min.svg";
import React from "react";
import { NavLink } from 'react-router-dom';
import "../Header/Header.css"

function Header({ onSignInClick }) {

    return (
        <header className="header">
            <NavLink to={"/"} className="header__logo">
                <img
                    className="header__logo-image"
                    src={headerLogo}
                    alt="Project title- NewsExplorer"
                />
            </NavLink>

            <div className="header__container">
                <div className="header__container-items">
                    <NavLink to={"/"} className="header__home">
                        Home
                    </NavLink>
                    <button className="header__button-signin" onClick={onSignInClick}>Sign in</button>
                    <button className="header__button-menu"></button>
                </div>
            </div >
        </header >
    );
}

export default Header;