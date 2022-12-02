import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

export function App() {
  useEffect(function () {
    fetch("http://localhost:3010/test", {
      method: "GET",
      mode: 'cors'
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        console.log(data);
      });
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}
