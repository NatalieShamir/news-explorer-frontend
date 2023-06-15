import React from "react";
import { useEffect } from "react";
import {
  Route,
  Routes,
} from 'react-router-dom';
import "../App/App.css";
import Main from "../Main/Main";
import SearchResults from "../SearchResults/SearchResults";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";
import Signin from "../SignInPopup/SignInPopup";
import Signup from "../SignUpPopup/SignUpPopup";
import RegistrationSuccessful from "../RegistrationSuccessful/RegistrationSuccessful";
import SavedNews from "../SavedNews/SavedNews";

function App() {

  const [isSignInPopupOpen, setIsSignInPopupOpen] = React.useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = React.useState(false);

  function handleSignUpClick() {
    setIsSignUpPopupOpen(true);
  }

  function closeAllPopups() {
    setIsSignInPopupOpen(false);
    setIsSignUpPopupOpen(false);
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
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<Signin isOpen={isSignInPopupOpen} onClose={closeAllPopups} />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Preloader />
      <NotFound />
      <SearchResults />
      <SavedNews />
      <Footer />
      <RegistrationSuccessful />
    </div>
  );
}

export default App;
