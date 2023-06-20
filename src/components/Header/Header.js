import headerLogo from "../../images/header-min.svg";
import React, { useEffect, useRef } from "react";
import { NavLink } from 'react-router-dom';
import "../Header/Header.css";
import SignIn from "../SignInPopup/SignInPopup";

function Header() {

    const [isSignInPopupOpen, setIsSignInPopupOpen] =
        React.useState(false);

    const ref = useRef()

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

    useEffect(() => {
        function handleClickOnOverlay(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                closeSignInPopup()
            }
        }
        document.addEventListener("click", handleClickOnOverlay)
        return () => document.removeEventListener("click", handleClickOnOverlay);
    }, [ref]);

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
            <SignIn isOpen={isSignInPopupOpen} onClose={closeSignInPopup} ref={ref} />
        </header >
    );
}

export default Header;