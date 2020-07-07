import React from "react";
import "./DeckControls.css";
import DrawButton from "./DrawButton";
import DeckStats from "./DeckStats";


function DeckControls({deckReady, drawOne, drawThree, drawTen, newDeck, newMajor, numCards}) {

  return (
    <div className="deck-controls">
      <DrawButton text="Create new deck" drawFunction={newDeck} />
      <DrawButton text="Major Arcana only" drawFunction={newMajor} />
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