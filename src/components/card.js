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
      <FormDialog open={open} setOpen={setOpen} />
      <div className="card-container" onclick={() => handleClickCard()}>
        <h1 className="card-title">{props.name}</h1>
        <p className="card-oab">{props.oab}</p>
        <p className="card-coast">{props.cost}</p>
        <p className="card-area">{props.area}</p>
        <p></p>
      </div>
    </>
  );
}
