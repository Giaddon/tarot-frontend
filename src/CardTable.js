import React, { useState } from "react";
import "./CardTable.css"
import Card from "./Card";
import DeckControls from './DeckControls';
import Deck from "./Deck";
import Tarot from './tarot';

/** Main component for storing and displaying cards. 
 *    State: 
 *      isLoading: Boolean. Default false. true while waiting for response from tarot API.
 *      deck: an instance of the Deck class. Array of card objects recieved from the API. Not visible to the user.
 *      hand: Array. Array of card objects drawn from the deck. Visible to the user.
 */

function CardTable() {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ deck, setDeck ] = useState(null);
  const [ hand, setHand ] = useState([]);

  // Gets a new deck from the API and sets it as the deck state. Clears the hand state.
  async function makeNewDeck(){
    setIsLoading(true);
    const cardArr = await Tarot.newDeck();
    let newDeck = new Deck(cardArr);
    setHand([]);
    setDeck(newDeck);
    setIsLoading(false);
  }

  // Gets a new deck of only major arcana cards and sets it as the deck state. Clears the hand state.
  async function makeNewMajorDeck(){
    setIsLoading(true);
    const cardArr = await Tarot.newMajorDeck();
    let newDeck = new Deck(cardArr);
    setHand([]);
    setDeck(newDeck);
    setIsLoading(false);
  }

  // Draws card from deck and adds to hand. 
  function drawSingle(){
    let newCard = deck.drawOne();
    setHand([newCard, ...hand]);
  }
  
  // Draws three cards from deck and adds to hand. 
  function drawThree(){
    let newCards = deck.drawThree();
    setHand([...newCards, ...hand]);
  }

  // Draws ten cards from deck and adds to hand. 
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