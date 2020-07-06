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
    setHand([newCard, ...hand]);
  }
  
  function drawThree(){
    let newCards = deck.drawThree();
    setHand([...newCards, ...hand]);
  }

  function drawTen(){
    let newCards = deck.drawTen();
    setHand([...newCards, ...hand]);
  }

  return (
    <div className="card-table">
      <DeckControls 
        deckReady={deck ? true : false} 
        newDeck={makeNewDeck} 
        drawOne={drawSingle} 
        drawThree={drawThree} 
        drawTen={drawTen} 
        numCards={deck ? deck.cards.length : null} 
      />
      {hand.map( (card) => <Card card={card} key={card.id} />)}
    </div>
  );
}

export default CardTable;