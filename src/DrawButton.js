import React from "react";

/** A button to manipulate the deck. Specific function controlled by drawFunction prop.
 *    Props:
 *      text: String. The text to display on the button.
 *      drawFunction: Function. The function to run on click.
 */

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