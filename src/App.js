import React from "react";
import "./App.css";
import "./customButtons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs } from "@fortawesome/free-solid-svg-icons";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <div className="header-bar">
        <a className="btn-config">
          <FontAwesomeIcon icon={faCogs}></FontAwesomeIcon>
        </a>
        <a className="btn-atualizar">Atualizar</a>
      </div>
      <div className="body-content">
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
