import React from "react";

function DrawButton({text, drawFunction}){

  function clickme(){
    drawFunction();
  }

  return (
    <button className="draw-one-button" onClick={clickme}>
      {text}
    </button>
  )
}

export default DrawButton;