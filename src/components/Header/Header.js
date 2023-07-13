import React from "react";
import { Link } from 'react-router-dom';
import headerLogo from "../../images/header-min.svg";
import "../Header/Header.css";
import Navigation from "../Navigation/Navigation";
import hamburgerMenuOpen from "../../images/menu.svg";
import hamburgerMenuClose from "../../images/close-min.svg";

function Header({ onSigninClick, isLoggedIn }) {
    const [isNavOpen, setIsNavOpen] = React.useState(false);

    function handleToggleMenu() {
        setIsNavOpen(!isNavOpen)
    }

    return (

        <header className={isNavOpen ? "header_hamburger_menu_open" : "header"}>
            <div className="header__container">
                <Link to={"/"} className="header__logo">
                    <img
                        className="header__logo-image"
                        src={headerLogo}
                        alt="Project title- NewsExplorer"
                    />
                </Link>
                <button className="header__hamburger-menu-toggle" onClick={handleToggleMenu}>
                    {isNavOpen ? <img src={hamburgerMenuClose} alt="x icon" /> : <img src={hamburgerMenuOpen} alt="toggle drop down menu" />}
                </button>
            </div>
            <Navigation
                isNavOpen={isNavOpen}
                onSigninClick={onSigninClick}
                isLoggedIn={isLoggedIn}
            />
        </header >
    )
}

export default Header;