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
  const [name, setname] = React.useState("");
  const [currentUser, setCurrentUser] = React.useState({});
  const [searchedArticles, setSearchedArticles] = React.useState((JSON.parse(localStorage.getItem("searchResults"))));
  const [isSeacrhProcessing, setIsSearchProcessing] = React.useState(false);
  const [submitSearch, setSubmitSearch] = React.useState(false);
  const [keyword, setKeyword] = React.useState(localStorage.getItem("keyword"));
  const navigate = useNavigate();
  const [savedArticles, setSavedArticles] = React.useState([]);

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
          setIsLoggedIn(true);
          setname(res.name);
          localStorage.setItem("jwt", res.token);
          navigate("/");
        } else {
          console.log("failed to sign-in");
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => closeAllPopups());
  }

  useEffect(() => {
    if (!isLoggedIn) {
      return
    }
    mainApi.getCurrentUser()
      .then((body) => {
        setCurrentUser(body);
      })
      .catch(console.error)
  }, [isLoggedIn]);

  const getArticles = useCallback(() => {
    isLoggedIn &&
      mainApi.getSavedArticles()
        .then((body) => {
          setSavedArticles(body);
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
    const token = localStorage.getItem("jwt");
    const fetchUserInfo = async () => {
      try {
        if (token) {
          const res = await auth.checkToken(token);
          const { data: { name } } = res;
          setCurrentUser(res.data);
          setname(name);
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error("Error checking token:", error);
      }
    };
    fetchUserInfo();
  }, [isLoggedIn]);

  function handleOpenSigninClick() {
    setIsSigninPopupOpen(true);
  }

  function handleAttemptArticleSaveClick() {
    setIsSignupPopupOpen(true);
  }

  function handleSwitchToSignup() {
    setIsSigninPopupOpen(false);
    setIsSignupPopupOpen(true);
  }

  function handleSwitchToSignin() {
    setIsSignupPopupOpen(false);
    setIsRegistrationSuccessfulOpen(false);
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
      if (e.target.classList.contains("popup")) {
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
        let articles = data.articles.map(article => article = { ...article, keyword: searchWord });
        setSearchedArticles(articles);
        localStorage.setItem("searchResults", JSON.stringify(articles));
        setIsSearchProcessing(false);
        setSubmitSearch(true);
        setKeyword(searchWord);
        localStorage.setItem("keyword", searchWord);
      })
      .catch(console.error)
      .finally(() => {
        setIsSearchProcessing(false);
      })
  }

  function handleArticleSave(article) {
    const isSaved = savedArticles.find(savedArticle => savedArticle.url === article.url);

    if (isSaved) {
      mainApi
        .deleteArticle(isSaved._id)
        .then((res) => {
          const newArticles = savedArticles.filter((item) => item._id !== article._id);
          setSavedArticles(newArticles);
        })
        .catch(console.error);
    } else {
      mainApi
        .createArticle({
          keyword: article.keyword,
          image: article.urlToImage,
          date: article.publishedAt,
          title: article.title,
          text: article.description,
          source: article.source.name,
          link: article.url,
        })
        .then(() => getArticles())
    }
  }

  function handleArticleDelete(article) {
    mainApi
      .deleteArticle(article._id)
      .then((res) => {
        const newArticles = savedArticles.filter((item) => item._id !== article._id);
        setSavedArticles(newArticles);
      })
      .catch(console.error);
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
          <Route path="/" element={
            <Main
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
              onAttemptSaveArticleClick={handleAttemptArticleSaveClick}
            />}
          />
          <Route path="/saved-news" element={
            <Protected
              isLoggedIn={isLoggedIn}
            >
              <SavedNews
                isLoggedIn={isLoggedIn}
                savedArticles={savedArticles}
                onArticleDelete={handleArticleDelete}
                name={name}
                keyword={keyword}
                onLogout={logout}
              />
            </Protected>
          }
          />
        </Routes>
        <RegistrationSuccessful
          isOpen={isRegistrationSuccessfulOpen}
          onClose={closeAllPopups}
          onSigninClick={handleSwitchToSignin}
        />
        <Footer />
      </div>
    </UserContext.Provider >
  )
}

export default App;