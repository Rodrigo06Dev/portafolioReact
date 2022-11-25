import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About";
import CardInfo from "./components/CardInfo";
import Header from "./components/Header";
import ListProject from "./components/ListProject";
import NavBar from "./components/NavBar";
import NavInfo from "./components/NavInfo";
import ListCertificates from "./components/ListCertificates";
import Preload from "./components/Preload";
import { Route, Routes } from "react-router-dom";
import useLocalStorage from "use-local-storage";



function App() {

  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const [show, setShow] = useState(2);

  const handleShow = (num) => {
    setShow(num);
  };

  useEffect(() => {}, [show]);

  return (
    <>
    <div className="App" data-theme={theme}>

      <Routes>
        <Route path="/" element={<Preload />} />
        <Route
          path="/portfolio"
          element={
            <>
              <Header />
              <div className="general__info">
                <CardInfo theme={theme} />
                <NavInfo theme={theme} />
              </div>
              <div className="general__content">
                <NavBar handleShow={handleShow} />
                {show === 1 ? (
                  <NavInfo theme={theme} show={show} />
                ) : show === 2 ? (
                  <ListProject />
                ) : show === 3 ? (
                  <ListCertificates />
                ) : (
                  <About theme={theme} />
                )}
              </div>
              <div className="darkbutton__container">
                <button
                  onClick={switchTheme}
                  className='dark' >
                  {theme === 'light' ? <i className="fa-solid fa-moon darkmode__button"></i> : <i className="fa-regular fa-sun darkmode__button"></i>}
                </button>
              </div>
              
            </>
          }
        />
      </Routes>
    </div>
    </>
  );
}

export default App;
