import React from "react";
import Parent from "../Parent/Parent";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";

function Main() {

    const [isSignInPopupOpen, setIsSignInPopupOpen] = React.useState(false);

    function handleSignInClick() {
        setIsSignInPopupOpen(true);
    }

    return (
        <>
            <Parent>
                <Header
                    onSignInClick={handleSignInClick}
                />
                <SearchForm />
            </Parent>
            <About />
        </>
    )
}

export default Main; 