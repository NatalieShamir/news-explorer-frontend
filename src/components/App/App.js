import '../App.css';
import Main from "../Main";
import SavedNews from "../SavedNews";
import Header from "../Header";
import Navigation from "../Navigation";
import SearchForm from "../SearchForm";
import NewsCardList from "../NewsCardList";
import NewsCard from "../NewsCard";
import About from "../About";
import Preloader from "../Preloader";
import Footer from "../Footer";
import PopupWithForm from "../PopupWithForm";
import SavedNewsHeader from "../SavedNewsHeader";


function App() {
  return (
    <div className="App">
      <Main />
      <SavedNews />
      <Header />
      <Navigation />
      <SearchForm />
      <NewsCardList />
      <NewsCard />
      <About />
      <Preloader />
      <Footer />
      <PopupWithForm />
      <SavedNewsHeader />
    </div>
  );
}

export default App;
