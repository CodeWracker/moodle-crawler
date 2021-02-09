import React, { useState, useEffect } from "react";
import "react-awesome-button/dist/themes/theme-c137.css";
import "./App.css";
import "./customButtons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs } from "@fortawesome/free-solid-svg-icons";
import Home from "./components/Home/Home";
import Settings from "./components/Settings/Settings";
import { AwesomeButton } from "react-awesome-button";

function App() {
  const [pagina, setPagina] = useState("Tarefas");

  function handleConfigButton() {
    "Tarefas" === pagina ? setPagina("Configurações") : setPagina("Tarefas");
  }

  return (
    <div className="App">
      <div className="header-bar">
        <div className="functions">
          <div className="btn-container">
            <AwesomeButton
              className="btn aws-btn"
              size="icon"
              type="primary"
              onPress={() => {
                handleConfigButton();
              }}
            >
              <FontAwesomeIcon icon={faCogs}></FontAwesomeIcon>
            </AwesomeButton>
          </div>

          <div className="btn-container">
            <AwesomeButton className="btn" type="secondary" onPress={() => {}}>
              Atualizar
            </AwesomeButton>
          </div>
        </div>
        <p className="page-title">{pagina}</p>
      </div>
      <div className="body-content">
        {"Tarefas" === pagina ? <Home></Home> : <Settings></Settings>}
      </div>
    </div>
  );
}

export default App;
