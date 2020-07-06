import React from "react";
import "./DeckControls.css";
import DrawButton from "./DrawButton";
import NewDeckButton from "./NewDeckButton";
import DeckStats from "./DeckStats";


function DeckControls({deckReady, drawOne, drawThree, drawTen, newDeck, numCards}) {

  return (
    <div className="deck-controls">
      <NewDeckButton newDeck={newDeck} />
      {deckReady
        ? <div>
            <DrawButton text="Draw a card" drawFunction={drawOne} />
            <DrawButton text="Draw three cards" drawFunction={drawThree} />
            <DrawButton text="Draw ten cards" drawFunction={drawTen} />
            <DeckStats numCards={numCards}  />
          </div>
        : null}
    </div>
  );
} 

export default DeckControls;