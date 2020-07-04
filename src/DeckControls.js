import React from "react";
import "./DeckControls.css";
import DrawOneButton from "./DrawOneButton";
import NewDeckButton from "./NewDeckButton";


function DeckControls({deckReady, drawOne, newDeck}) {

  return (
    <div className="deck-controls">
      <NewDeckButton newDeck={newDeck} />
      {deckReady
        ? <DrawOneButton drawOne={drawOne} />
        : null}
    </div>
  );
} 

export default DeckControls;