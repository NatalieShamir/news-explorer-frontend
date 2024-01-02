import React from "react";
import { Link } from 'react-router-dom';
import loggedinheaderLogo from "../../images/NewsExplorer-min.svg";
import hamburgerMenuOpen from "../../images/menu_dark.svg";
import hamburgerMenuClose from "../../images/close-min.svg";
import "../LoggedinHeader/LoggedinHeader.css";
import logoutDark from "../../images/logout_dark.svg";


function LoggedinHeader({ name, onLogout }) {
    const [isLoggedInNavOpen, setIsLoggedInNavOpen] = React.useState(false);

    function handleToggleLoggedInMenu() {
        setIsLoggedInNavOpen(!isLoggedInNavOpen)
    }

    return (
        <header className={isLoggedInNavOpen ? "logged-in-header_hamburger_menu_open" : "logged-in-header"}>
            <div className="logged-in-header__container">
                <Link to="/" className="logged-in-header__logo">
                    <img
                        className="logged-in-header__logo-image"
                        src={loggedinheaderLogo}
                        alt="Project title- NewsExplorer"
                    />
                </Link>
                <button className="logged-in-header__hamburger-menu-toggle" onClick={handleToggleLoggedInMenu}>
                    {isLoggedInNavOpen ? <img src={hamburgerMenuClose} alt="x icon" /> : <img src={hamburgerMenuOpen} alt="toggle drop down menu" />}
                </button>
            </div>
            <nav className={`${`logged-in-header-nav`} ${isLoggedInNavOpen ? "logged-in-header-nav_open" : ""}`}>
                <ul className="logged-in-header-nav__items">
                    <li className="logged-in-header-nav__item">
                        <Link to="/" className="logged-in-header-nav__home">
                            Home
                        </Link>
                    </li >
                    <li className="logged-in-header-nav__item">
                        <Link to="/saved-news" className="logged-in-header-nav__articles">Saved articles</Link>
                    </li>
                    <li className="logged-in-header-nav__item">
                        <button className="logged-in-header-nav__button-signout" onClick={onLogout}>
                            <div className="logged-in-header-nav__button-signout-items">
                                <p className="logged-in-header-nav__user">{name}</p>
                                <img className="logged-in-header-nav__logout"
                                    src={logoutDark}
                                    alt="logout icon"
                                />
                            </div>
                        </button>
                    </li>
                </ul >
            </nav>
        </header >
    )
}

export default LoggedinHeader;