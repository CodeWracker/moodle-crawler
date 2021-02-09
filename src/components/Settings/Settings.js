import React, { useState, useEffect } from "react";
import "./Settings.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faKey } from "@fortawesome/free-solid-svg-icons";

function Settings() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  return (
    <div className="container">
      <div className="moodle-config-container">
        <p className="configTitle">Credenciais Moodle</p>
        <div className="infos-input">
          <div className="input-container">
            <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
            <input
              className="my-input"
              placeholder={login ? login : "Email ou CPF"}
            ></input>
          </div>
          <div className="input-container">
            <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
            <input
              className="my-input"
              placeholder={senha ? senha : "Senha"}
            ></input>
          </div>
        </div>
      </div>
      <div className="crawler-config-container">
        <p className="configTitle">Configurações do robô</p>
        <div className="materia-config">
          <p className="meteria-title">(20202) - Cálculo III</p>
        </div>
      </div>
    </div>
  );
}

export default Settings;
