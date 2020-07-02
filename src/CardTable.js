import React, { useState } from "react";
import "./CardTable.css"
import Card from "./Card";
import DeckControls from './DeckControls';
import Deck from "./Deck";
import Tarot from './tarot';

function CardTable() {
  const [ deck, setDeck ] = useState(null);
  const [ hand, setHand ] = useState([]);

  async function makeNewDeck(){
    const cardArr = await Tarot.newDeck();
    let newDeck = new Deck(cardArr);
    setHand([]);
    setDeck(newDeck);
  }

  function drawSingle(){
    let newCard = deck.drawOne();
    console.log("New Card: ", newCard);
    setHand([...hand, newCard]);
    console.log("Hand: ", hand);
  }
  
  return (
    <div className="card-table">
      <DeckControls deckReady={deck ? true : false} newDeck={makeNewDeck} drawOne={drawSingle} />
      {hand.map( (card) => <Card card={card} key={card.id} />)}
    </div>
  );
}

export default CardTable;