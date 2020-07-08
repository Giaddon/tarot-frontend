import React, { useState } from "react";
import "./CardTable.css"
import Card from "./Card";
import DeckControls from './DeckControls';
import Deck from "./Deck";
import Tarot from './tarot';

function CardTable() {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ deck, setDeck ] = useState(null);
  const [ hand, setHand ] = useState([]);

  async function makeNewDeck(){
    setIsLoading(true);
    const cardArr = await Tarot.newDeck();
    let newDeck = new Deck(cardArr);
    setHand([]);
    setDeck(newDeck);
    setIsLoading(false);
  }

  async function makeNewMajorDeck(){
    setIsLoading(true);
    const cardArr = await Tarot.newMajorDeck();
    let newDeck = new Deck(cardArr);
    setHand([]);
    setDeck(newDeck);
    setIsLoading(false);
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

  return isLoading 
    ? (<div className="card-table">
        <h1 className="loading">Loading...</h1>
      </div>)
    : (<div className="card-table">
        <DeckControls 
          deckReady={deck ? true : false} 
          newDeck={makeNewDeck}
          newMajor={makeNewMajorDeck} 
          drawOne={drawSingle} 
          drawThree={drawThree} 
          drawTen={drawTen} 
          numCards={deck ? deck.cards.length : null} 
        />
      {hand.map( (card) => <Card card={card} key={card.id} />)}
      </div>)
}

export default CardTable;