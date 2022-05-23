import React from "react";
import "./card.css";
import FormDialog from "../dialog/dialog";

export default function Card(props) {
  const [open, setOpen] = React.useState(false);
  const handleClickCard = () => {
    setOpen(true);
  };
  return (
    <>
      <FormDialog
        open={open}
        setOpen={setOpen}
        name={props.name}
        oab={props.oab}
        cost={props.cost}
        area={props.area}
        listCard={props.listCar}
        setListCard={props.setListCar}
        id={props.id}
      />
      <div className="card-container" onClick={() => handleClickCard()}>
        <center>
          <h1 className="card-title">{props.name}</h1>
          <p className="card-oab">OAB Nº{props.oab}</p>
          <p className="card-coast">Valor - R${props.cost},00</p>
          <p className="card-area">Area de atuação - {props.area}</p>
        </center>
      </div>
    </>
  );
}
