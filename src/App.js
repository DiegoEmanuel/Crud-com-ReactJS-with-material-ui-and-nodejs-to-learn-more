import "./App.css";
import React, { useState } from "react";
import Axios from "axios";
import Card from "./components/card";
function App() {
  const [values, setValues] = useState();

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };
  const handleClickButton = () => {
    Axios.post("http://localhost:3001/register", {
      name: values.name,
      oab: values.oab,
      cost: values.cost,
      area: values.area,
    }).then((response) => console.log(response));
  };
  return (
    <div className="app--container">
      <div className="register--container">
        <h1 className="register--title">Sistema de Advogados</h1>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          className="register--input"
          onChange={handleChangeValues}
        ></input>
        <input
          type="text"
          name="oab"
          placeholder="Número da OAB"
          className="register--input"
          onChange={handleChangeValues}
        ></input>
        <input
          type="text"
          name="cost"
          placeholder="Ex.: R$ 600,00"
          className="register--input"
          onChange={handleChangeValues}
        ></input>
        <input
          type="text"
          name="area"
          placeholder="Ex.: Penal"
          className="register--input"
          onChange={handleChangeValues}
        ></input>
        <button
          className="register--button"
          onClick={() => handleClickButton()}
        >
          Cadastrar
        </button>
      </div>
      <Card></Card>
    </div>
  );
}

export default App;
