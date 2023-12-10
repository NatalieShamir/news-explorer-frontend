import React, { useEffect } from "react";
import {
  Route,
  Routes,
  useNavigate,
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
import { newsApi } from "../../utils/NewsApi";
import { mainApi } from "../../utils/MainApi";
import { useCallback } from 'react';
import Protected from "../Protected/Protected";

function App() {

  const [isSigninPopupOpen, setIsSigninPopupOpen] =
    React.useState(false);
  const [isSignupPopupOpen, setIsSignupPopupOpen] =
    React.useState(false);
  const [isRegistrationSuccessfulOpen, setIsRegistrationSuccessfulOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [name, setname] = React.useState({} || "");
  const [currentUser, setCurrentUser] = React.useState({});
  const [searchedArticles, setSearchedArticles] = React.useState((JSON.parse(localStorage.getItem("searchResults"))));
  const [isSeacrhProcessing, setIsSearchProcessing] = React.useState(false);
  const [submitSearch, setSubmitSearch] = React.useState(false);
  const [keyword, setKeyword] = React.useState(localStorage.getItem("keyword"));
  const navigate = useNavigate();
  const [savedArticles, setSavedArticles] = React.useState([]);
  /* 
    const result = Array.isArray(savedArticles);
    console.log("result " + (result)); */

  function register(email, password, name) {
    auth.signup(email, password, name)
      .then((res) => {
        console.log(res._id)
      })
      .then(() => {
        closeAllPopups();
        setIsRegistrationSuccessfulOpen(true);
      })
      .catch((err) => {
        console.log(`Error: ${err.status}`);
      })
  }

  function login(email, password) {
    auth.signin(email, password)
      .then(res => {
        if (res.token) {
          setIsLoggedIn(true)
          setname(name)
          localStorage.setItem("jwt", res.token)
          navigate("/")
        }
        else {
          console.log("failed to sign-in")
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => closeAllPopups())
  }

  useEffect(() => {
    if (!isLoggedIn) {
      return
    }
    mainApi
      .getUserInfo()
      .then((res) => {
        setCurrentUser(res.data);
      })
      .catch((err) => console.log(err))
  }, [isLoggedIn]);

  const getArticles = useCallback(() => {
    isLoggedIn &&
      mainApi
        .getSavedArticles()
        .then((res) => {
          setSavedArticles(res);
        })
        .catch(console.log);
  }, [isLoggedIn]);

  useEffect(() => {
    getArticles()
  }, [getArticles]);

  function logout() {
    localStorage.removeItem("jwt")
    setIsLoggedIn(false)
    setname("")
    navigate("/")
  }

  useEffect(() => {
    const token = localStorage.getItem("jwt")

    if (token) {
      auth.checkToken(token)
        .then(res => {
          const { data: { name } } = res
          setname(name)
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

  function handleSearchFormSubmit(searchWord) {
    setIsSearchProcessing(true);
    newsApi.getSearchedArticles(searchWord)
      .then((data) => {
        setSearchedArticles(data.articles);
        localStorage.setItem("searchResults", JSON.stringify(data.articles));
        setIsSearchProcessing(false);
        setSubmitSearch(true);
        setKeyword(searchWord);
        localStorage.setItem("keyword", searchWord);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsSearchProcessing(false);
      })
  }

  function handleArticleSave(article) {
    const isSaved = [savedArticles].find((savedArticle) => savedArticle.url === article.url);
    if (isSaved) {
      mainApi.deleteArticle(isSaved._id)
        .then(() => getArticles())
        .catch((err) => console.log(err))
    }

    else {
      mainApi.createArticle({
        keyword: article.keyword,
        cardImage: article.urlToImage,
        date: article.publishedAt,
        title: article.title,
        text: article.description,
        website: article.source.name,
        link: article.url
      })
        .then(() => getArticles())
        .catch((err) => console.log(err))
    }
  }

  function handleArticleDelete(article) {
    mainApi
      .deleteCard(article._id)
      .then((res) => {
        const newArticles = savedArticles.filter((item) => item._id !== article._id);
        setSavedArticles(newArticles);
      })
      .catch((err) => console.log(err))
  }

  return (
    <UserContext.Provider value={currentUser}>
      <div className="app">
        <Login
          onLogin={login}
          isOpen={isSigninPopupOpen}
          onClose={closeAllPopups}
          onSignupClick={handleSwitchToSignup}
        />
        <Register
          onRegister={register}
          isOpen={isSignupPopupOpen}
          onClose={closeAllPopups}
          onSigninClick={handleSwitchToSignin}
        />
        <Routes>
          <Route path="/" element={<Main
            onSigninClick={handleOpenSigninClick}
            isLoggedIn={isLoggedIn}
            name={name}
            onLogout={logout}
            searchedArticles={searchedArticles}
            onSubmit={handleSearchFormSubmit}
            isSeacrhProcessing={isSeacrhProcessing}
            submitSearch={submitSearch}
            keyword={keyword}
            onArticleSave={handleArticleSave}
          />}
          />
          <Route path="/saved-news" element={
            <Protected redirectPath="/"
              onArticleDelete={handleArticleDelete}
              isLoggedIn={isLoggedIn} ><SavedNews savedArticles={savedArticles} />
            </Protected>
          }
          />
        </Routes>
        <Login
          onLogin={login}
          isOpen={isSigninPopupOpen}
          onClose={closeAllPopups}
          onSignupClick={handleSwitchToSignup}
        />
        <Register
          onRegister={register}
          isOpen={isSignupPopupOpen}
          onClose={closeAllPopups}
          onSigninClick={handleSwitchToSignin}
        />
        <RegistrationSuccessful
          isOpen={isRegistrationSuccessfulOpen}
          onClose={closeAllPopups}
        />
        <Footer />
      </div>
    </UserContext.Provider >
  )
}

export default App;