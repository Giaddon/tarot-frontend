import React from 'react';
import './Card.css';

function Card({card}) {

  return (
    <div className="card">
      <h2>{card.name}</h2>
      <img 
        src={card.image} 
        className={card.reverse ? "reversed" : ""} 
        alt="Tarot" 
      />
      <div>
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