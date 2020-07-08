import React from "react";
import "./DeckStats.css"

function DeckStats({numCards}) {

  return (
    <div className="deck-stats">
      <p>Remaining cards: {numCards}</p>
    </div>
  )
}

export default DeckStats;