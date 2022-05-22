import "./App.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import Card from "./components/card";
function App() {
  const [values, setValues] = useState();
  const [listAdvogados, setListAdvogados] = useState();
  console.log(listAdvogados);
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
    }).then(() => {
      setListAdvogados([
        ...listAdvogados,
        {
          name: values.name,
          oab: values.oab,
          cost: values.cost,
          area: values.area,
        },
      ]);
    });
  };
  useEffect(() => {
    Axios.get("http://localhost:3001/getCards").then((response) => {
      setListAdvogados(response.data);
    });
  }, []);

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
      {typeof listAdvogados !== "undefined" &&
        listAdvogados.map((value) => {
          return (
            <Card
              key={value.id}
              listCard={listAdvogados}
              setListAdvogados={setListAdvogados}
              id={value.id}
              name={value.name}
              oab={value.oab}
              cost={value.cost}
              area={value.area}
            ></Card>
          );
        })}
    </div>
  );
}

export default App;
