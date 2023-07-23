import React, { useEffect } from "react";
import {
  Route,
  Routes,
  useNavigate
} from 'react-router-dom';
import "../App/App.css";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import RegistrationSuccessful from "../RegistrationSuccessful/RegistrationSuccessful";
import * as auth from "../../utils/auth";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";
import { UserContext } from "../../contexts/CurrentUserContext";


function App() {

  const [isSigninPopupOpen, setIsSigninPopupOpen] =
    React.useState(false);
  const [isSignupPopupOpen, setIsSignupPopupOpen] =
    React.useState(false);
  const [isRegistrationSuccessfulOpen, setIsRegistrationSuccessfulOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [username, setUsername] = React.useState({} || "");
  const [isSuccessful, setIsSuccessful] = React.useState(true);
  const [currentUser, setCurrentUser] = React.useState({});
  const navigate = useNavigate();

  function register(email, password, username) {
    auth.signup(email, password, username)
      .then(res => {
        if (res._id) {
          setIsSuccessful("successful");
          setTimeout(() => {
            navigate("/signin");
            setIsRegistrationSuccessfulOpen(false);
          }, 3000)
        } else {
          setIsSuccessful("fail");
        }
      })
      .catch((err) => {
        setIsSuccessful("fail");
      })
      .finally(() => {
        setIsRegistrationSuccessfulOpen(true);
      });
  }

  function login(email, password) {
    auth.signin(email, password)
      .then(res => {
        if (res.token) {
          setIsLoggedIn(true)
          setUsername(username)
          localStorage.setItem("jwt", res.token)
          navigate("/")
        } else {
          setIsSuccessful("fail");
        }
      })
      .catch((err) => {
        setIsSuccessful("fail");
      })
  }

  useEffect(() => {
    const token = localStorage.getItem("jwt")

    if (token) {
      auth.checkToken(token)
        .then(res => {
          const { data: { username } } = res
          setUsername(username)
          setIsLoggedIn(true);
          navigate("/")
        })
        .catch((err) => console.log(err))
    }
  }, [navigate])

  function handleOpenSigninClick() {
    setIsSigninPopupOpen(true);
  }

  function handleSwitchToSignup() {
    setIsSigninPopupOpen(false);
    setIsSignupPopupOpen(true);
  }

  function handleSwitchToSignin() {
    setIsSignupPopupOpen(false);
    setIsSigninPopupOpen(true);
  }

  function closeAllPopups() {
    setIsSigninPopupOpen(false);
    setIsSignupPopupOpen(false);
    setIsRegistrationSuccessfulOpen(false);
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

  useEffect(() => {
    function closePopupOnRemoteClick(e) {
      if (e.target === e.currentTarget) {
        closeAllPopups();
      }
    }
    document.addEventListener("mousedown", closePopupOnRemoteClick);
    return () => document.removeEventListener("mousedown", closePopupOnRemoteClick);
  }, []);

  return (
    <UserContext.Provider value={currentUser}>
      <div className="app">
        <Routes>
          <Route path="/" element={<Main
            onSigninClick={handleOpenSigninClick}
            isLoggedIn={isLoggedIn}
            username={username}
          />} />
          <Route path="/saved-news" element={<SavedNews />} />
          <Route path="/signin" element={<Login
            onLogin={login}
            isOpen={isSigninPopupOpen}
            onClose={closeAllPopups}
            onSignupClick={handleSwitchToSignup}
          />}
          />
          <Route path="/signup" element={<Register
            onRegister={register}
            isOpen={isSignupPopupOpen}
            onClose={closeAllPopups}
            onSigninClick={handleSwitchToSignin}
          />}
          />
        </Routes>
        <RegistrationSuccessful
          isOpen={isRegistrationSuccessfulOpen}
          onClose={closeAllPopups}
          isSuccessful={isSuccessful}
        />
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
