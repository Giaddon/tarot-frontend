import React from "react";
import "./DeckStats.css"

/** Displays the number of cards remaining in the deck.
 *    Props:
 *      numCards: Number. The number of cards remaining in CardTable's deck state.
 */

function DeckStats({numCards}) {

  return (
    <div className="deck-stats">
      <p>Remaining cards: {numCards}</p>
    </div>
  )
}

export default DeckStats;