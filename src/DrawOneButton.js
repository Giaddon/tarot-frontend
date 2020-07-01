import React from "react";

function DrawOneButton({drawOne}){

  function clickme(){
    drawOne();
  }

  return (
    <button className="draw-one-button" onClick={clickme}>
      Draw a card
    </button>
  )
}

export default DrawOneButton;