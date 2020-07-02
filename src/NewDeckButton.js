import React from "react";

function NewDeckButton({newDeck}){

  function clickme(){
    newDeck();
  }

  return (
    <button className="new-deck-button" onClick={clickme}>
      Create new deck
    </button>
  )
}

export default NewDeckButton;