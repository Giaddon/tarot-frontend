import React from "react";
import "./DeckControls.css";
import DrawButton from "./DrawButton";
import DeckStats from "./DeckStats";

/** Displays the buttons from making a new deck or drawing cards.
 *    Props:
 *      deckReady: Boolean. Reflects if a deck is ready to be drawn from.
 *      drawOne: Function.
 *      drawThee: Function.
 *      drawTen: Function.
 *      newDeck: Function.
 *      newMajor: Function.
 *      numCards: Number. The number of cards remaining in the deck.
 */

function DeckControls({deckReady, drawOne, drawThree, drawTen, newDeck, newMajor, numCards}) {

  return (
    <div className="deck-controls">
      <h2>The Tarot</h2>
      <DrawButton text="Create new deck" drawFunction={newDeck} />
      <DrawButton text="Major arcana only" drawFunction={newMajor} />
      {deckReady
        ? <div>
            {numCards >= 1 
              ? <DrawButton text="Draw a card" drawFunction={drawOne} />
              : null}
            {numCards >= 3
              ? <DrawButton text="Draw three cards" drawFunction={drawThree} />
              : null}
            {numCards >= 10
              ? <DrawButton text="Draw ten cards" drawFunction={drawTen} />
              : null} 
            <DeckStats numCards={numCards}  />
          </div>
        : null}
    </div>
  );
} 

export default DeckControls;