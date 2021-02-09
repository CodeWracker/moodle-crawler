import React, { useState, useEffect } from "react";
import "./App.css";
import "./customButtons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs } from "@fortawesome/free-solid-svg-icons";
import Home from "./components/Home/Home";
import Settings from "./components/Settings/Settings";

function App() {
  const [pagina, setPagina] = useState("home");

  function handleConfigButton() {
    "home" === pagina ? setPagina("settings") : setPagina("home");
  }

  return (
    <div className="App">
      <div className="header-bar">
        <a
          className="btn-config"
          onClick={() => {
            handleConfigButton();
          }}
        >
          <FontAwesomeIcon icon={faCogs}></FontAwesomeIcon>
        </a>
        <a className="btn-atualizar">Atualizar</a>
      </div>
      <div className="body-content">
        {"home" === pagina ? <Home></Home> : <Settings></Settings>}
      </div>
    </div>
  );
}

export default App;
