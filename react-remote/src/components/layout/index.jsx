import React from "react";
import logo from "./logo.svg";

export const Layout = ({ children }) => (
  <div className="App">
    <header className="App-header">
      <h1>Главная страница в React APP </h1>
      <img src={logo} className="App-logo" alt="logo" />
    </header>
    {children}
  </div>
);
