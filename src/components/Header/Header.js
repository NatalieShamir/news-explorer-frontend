import headerLogo from "../../images/header-min.svg";
import React from "react";
import { Link } from 'react-router-dom';
import "../Header/Header.css"

function Header({ onSignInClick }) {

    return (
        <header className="header">
            <img
                className="header__image"
                src={headerLogo}
                alt="Project title- NewsExplorer"
            />

            <div className="header__container">
                <div className="header__container-items">
                    <Link to={"/"} className="header__home">
                        Home
                    </Link>
                    <button className="header__button-signin" onClick={onSignInClick}>Sign in</button>
                </div>
            </div >
        </header >
    );
}

export default Header;