import React from "react";
import "./DeckStats.css"

function DeckStats({numCards}) {

  return (
    <div className="deck-stats">
      <p>Cards: {numCards}</p>
    </div>
  )
}

export default DeckStats;