import headerLogo from "../../images/header.svg";
import React from "react";
import { Link } from 'react-router-dom';

export default function Header({ isLoggedIn, onSignIn }) {

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
                        <Link to={"/"} className="header__signout">{ }</Link>
                    </div>

                ) : (
                    <div className="header__container-items">
                        <Link to={"/"} className="header__home">
                            Home
                        </Link>
                        <p className="header__text" onClick={onSignIn}>Sign in</p>
                    </div>
                )}
            </div>
        </header>
    );
}
