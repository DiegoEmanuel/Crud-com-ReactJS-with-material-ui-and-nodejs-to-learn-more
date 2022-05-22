import "./App.css";
import React, { useState } from "react";
function App() {
  const [values, setValues] = useState();

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };
  const handleClickButton = () => {
    console.log(values);
  };
  return (
    <div className="app--container">
      <div className="register--container">
        <h1 className="register--title">Sistema de advogados</h1>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          className="register--input"
          onChange={handleChangeValues}
        ></input>
        <input
          type="text"
          name="OAB"
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
    </div>
  );
}

export default App;
