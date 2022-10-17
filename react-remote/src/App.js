import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="App">
            <header className="App-header">
              <h1>Главная страница в React APP </h1>
              <img src={logo} className="App-logo" alt="logo" />
              <Link to="/test">
                Щелкни для перехода на другую страницу в React APP
              </Link>
              <Link to="/test2">
               Для перехода в Nuxt
              </Link>
            </header>
          </div>
        }
      />
      <Route
        path="/test"
        element={
          <div className="App">
            <header className="App-header">
              <h1>Другая страница в React APP </h1>
              <img src={logo} className="App-logo" alt="logo" />
              <Link to="../">Назад</Link>
            </header>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
