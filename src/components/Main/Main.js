import React from "react";
import Parent from "../Parent/Parent";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Signin from "../SignInPopup/SignInPopup";
import Signup from "../SignUpPopup/SignUpPopup";
import RegistrationSuccessful from "../RegistrationSuccessful/RegistrationSuccessful";
import {
    Route, Routes
} from 'react-router-dom';
import { useEffect } from "react";


function Main() {

    const [isSignInPopupOpen, setIsSignInPopupOpen] =
        React.useState(false);
    const [isSignUpPopupOpen, setIsSignUpPopupOpen] =
        React.useState(false);
    const [isRegisterSuccessOpen, setIsRegisterSuccessOpen] =
        React.useState(false);

    function handleSignInClick() {
        setIsSignInPopupOpen(true);
    }

    function closeAllPopups() {
        setIsSignInPopupOpen(false);
        setIsSignUpPopupOpen(false);
        setIsRegisterSuccessOpen(false);
    }

    useEffect(() => {
        function closeByEscape(e) {
            if (e.key === "Escape") {
                closeAllPopups();
            }
        }
        document.addEventListener("keydown", closeByEscape);
        return () => document.removeEventListener("keydown", closeByEscape);
    }, []);

    return (
        <>
            <Parent>
                <Header onSignInClick={handleSignInClick} onClose={closeAllPopups}
                />
                <SearchForm />
            </Parent>
            <About />
            <Routes>
                <Route path="/signin" element={<Signin isOpen={isSignInPopupOpen} onClose={closeAllPopups} />} />
                <Route path="/signup" element={<Signup isOpen={isSignUpPopupOpen} onClose={closeAllPopups} />} />
            </Routes>
            <RegistrationSuccessful isOpen={isRegisterSuccessOpen} onClose={closeAllPopups} />
        </>
    )
}

export default Main; 