import React from "react";
import { Link } from 'react-router-dom';
import "../Header/Header.css";
import Navigation from "../Navigation/Navigation";

function Header({ onSigninClick, isLoggedIn, name, onLogout, headerLogoSrc, hamburgerMenuOpenSrc, hamburgerMenuCloseSrc, isSavedNews }) {
    const [isNavOpen, setIsNavOpen] = React.useState(false);

    function handleToggleMenu() {
        setIsNavOpen(!isNavOpen)
    }

    return (
        <header className={isNavOpen ? "header_hamburger_menu_open" : "header"}>
            <div className="header__container">
                <Link to="/" className="header__logo">
                    <img
                        className="header__logo-image"
                        src={headerLogoSrc}
                        alt="Project title- NewsExplorer"
                    />
                </Link>
                <button className="header__hamburger-menu-toggle" onClick={handleToggleMenu}>
                    {isNavOpen ? <img src={hamburgerMenuCloseSrc} alt="x icon" /> : <img src={hamburgerMenuOpenSrc} alt="toggle drop down menu" />}
                </button>
            </div>
            <Navigation
                isNavOpen={isNavOpen}
                onSigninClick={onSigninClick}
                isLoggedIn={isLoggedIn}
                name={name || ""}
                onLogout={onLogout}
                isSavedNews={isSavedNews}
            />
        </header >
    )
}

export default Header;