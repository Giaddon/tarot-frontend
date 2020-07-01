import React from 'react';
import './Card.css';
import $ from "jquery";

function Card({card}) {

  function toggleDesc() {
    console.log("Click");
    $(`#${card.id}-desc`).slideToggle(400);
  }

  return (
    <div className={card.reverse ? "card r" : "card"} >
      <h2>{card.name}</h2>
      <img
        onClick={toggleDesc} 
        src={card.image} 
        className={card.reverse ? "reversed" : ""} 
        alt={`Tarot Card: ${card.name} ${card.reverse ? "reversed" : null}`} 
      />
      <div id={`${card.id}-desc`} className={card.reverse ? "r" : null}>
        <p>{card.summary}</p>
        <br />
        {card.reverse 
          ? <p>Reversed: {card.reversed}</p>
          : <p>Upright: {card.upright}</p>
        }
      </div>
    </div>
  );
}

export default Card;