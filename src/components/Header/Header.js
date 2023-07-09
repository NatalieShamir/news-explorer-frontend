import React from "react";
import { Link } from 'react-router-dom';
import headerLogo from "../../images/header-min.svg";
import "../Header/Header.css";
import Navigation from "../Navigation/Navigation";
import hamburgerMenuOpen from "../../images/menu.svg";
import hamburgerMenuClose from "../../images/close-min.svg";

function Header() {
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
                    {isNavOpen ? <img src={hamburgerMenuClose} /> : <img src={hamburgerMenuOpen} />}
                </button>
            </div>
            <Navigation
                isNavOpen={isNavOpen}
            />
        </header >
    );
}

export default Header;