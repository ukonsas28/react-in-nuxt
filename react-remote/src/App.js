import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { VueLink } from "./components/VueLink";

function App() {
  useEffect(() => {
    console.log("react-mount");
    return () => {
      console.log();
    };
  }, []);

  return (
    <Routes>
      <Route
        path="/reactPage"
        element={
          <div className="App">
            <header className="App-header">
              <h1>Главная страница в React APP </h1>
              <img src={logo} className="App-logo" alt="logo" />
              <Link to="/reactPage/test">
                Щелкни для перехода на другую страницу в React APP
              </Link>
              <VueLink to="/test2">Для перехода в Nuxt</VueLink>
            </header>
          </div>
        }
      />
      <Route
        path="/reactPage/test"
        element={
          <div className="App">
            <header className="App-header">
              <h1>Другая страница в React APP </h1>
              <img src={logo} className="App-logo" alt="logo" />
              <Link to="/reactPage">Назад</Link>
            </header>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
