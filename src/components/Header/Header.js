import headerLogo from "../../images/header-min.svg";
import React, { useEffect } from "react";
import { NavLink } from 'react-router-dom';
import "../Header/Header.css";
import SignIn from "../SignInPopup/SignInPopup";

function Header() {

    const [isSignInPopupOpen, setIsSignInPopupOpen] =
        React.useState(false);

    function handleSignInClick() {
        setIsSignInPopupOpen(true);
    }

    function closeSignInPopup() {
        setIsSignInPopupOpen(false);
    }

    useEffect(() => {
        function closeByEscape(e) {
            if (e.key === "Escape") {
                closeSignInPopup();
            }
        }
        document.addEventListener("keydown", closeByEscape);
        return () => document.removeEventListener("keydown", closeByEscape);
    }, []);

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
                    <button className="header__button-signin" onClick={handleSignInClick}>Sign in</button>
                    <button className="header__button-menu"></button>
                </div>
            </div >
            <SignIn isOpen={isSignInPopupOpen} onClose={closeSignInPopup} />
        </header >
    );
}

export default Header;