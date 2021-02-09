import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className="container">
      <div className="materia-container">
        <p className="materia-title">(20202) - Cálculo III</p>
        <p className="materia-unidade">
          SEMANA 01: Funções Vetoriais, Parametrização e Derivadas
        </p>
        <div className="tarefas">
          <div className="item">
            <input type="checkbox" id="tarefa-1-1" name="tarefa-1-1"></input>
            <label for="tarefa-1-1">S01V01 - Funções Vetoriais</label>
          </div>
          <div className="item">
            <input type="checkbox" id="tarefa-1-2" name="tarefa-1-2"></input>
            <label for="tarefa-1-2">
              Lista 1 - Funções Vetoriais, Limites e Parametrização
            </label>
          </div>
        </div>
      </div>
      <div className="materia-container">
        <p className="materia-title">(20202) - Linguagem de Programação II</p>
        <p className="materia-unidade">
          Unidade 1 - Introdução a Linguagem C++
        </p>
        <div className="tarefas">
          <div className="item">
            <input type="checkbox" id="tarefa-2-1" name="tarefa-2-1"></input>
            <label for="tarefa-2-1">
              Aula 01a - Enunciado Warmup - Primeiro Programa em C++
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
