import headerLogo from "../../images/header-min.svg";
import React from "react";
import { Link } from 'react-router-dom';
import "../Header/Header.css"

function Header({ isLoggedIn, onSignIn, onSignOut }) {

    return (
        <header className="header">
            <img
                className="header__image"
                src={headerLogo}
                alt="Project title- NewsExplorer"
            />

            <div className="header__container">
                {isLoggedIn ? (
                    <div>
                        <Link to={"/"} className="header__home">
                            Home
                        </Link>
                        <Link to={"/"} className="header__articles">Saved articles</Link>
                        <button className="header__button-signout" onClick={onSignOut}></button>
                    </div>

                ) : (
                    <div className="header__container-items">
                        <Link to={"/"} className="header__home">
                            Home
                        </Link>
                        <button className="header__button-signin" onClick={onSignIn}>Sign in</button>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;