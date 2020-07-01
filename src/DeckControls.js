import React from "react";
import DrawOneButton from "./DrawOneButton";


function DeckControls({drawOne}) {

  return (
    <div className="deck-controls">
      <DrawOneButton drawOne={drawOne} />
    </div>
  );
} 

export default DeckControls;