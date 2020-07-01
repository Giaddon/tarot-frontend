import React, { useState } from "react";
import "./CardTable.css"
import Card from "./Card";

function CardTable({ cards }) {
  //const [ cards, setCards ] = useState([]);
  
  return (
    <div className="card-table">
      {cards.map( (card) => <Card card={card} key={card.id} />)}
    </div>
  );
}

export default CardTable;