import Axios from "axios";

const API = "https://tarot.howlcode.com/api/v1";

/** Class for interacting with tarot API. */

class Tarot {

  // Requests a new shuffled deck from the API. Returns array of objects.
  static async newDeck() {
    try {
      console.log("Generating deck...")
      const response = await Axios.get(`${API}/spreads/shuffled`);
      let deck = response.data
      console.log("Deck complete.");
      for (let card of deck) {
        this.prepCard(card);
      }
      return deck; 

    } catch(error) {
      console.error(error);
    };
  }

  // Requests a new static deck from the API. Removes the non major arcana. Returns array of objects.
  static async newMajorDeck() {
    try {
      console.log("Generating deck...")
      const response = await Axios.get(`${API}/cards`);
      let deck = response.data
      console.log("Deck complete.");
      
      //The first 22 cards returned are the major arcana, we drop the rest.
      deck.splice(22)
      
      // Swap cards around to shuffle them.
      for (let i = 0; i < deck.length; i++) {
        let rand = Math.floor(Math.random() * 22);
        [deck[i], deck[rand]] = [deck[rand], deck[i]];
      }
 
      for (let card of deck) {
        this.prepCard(card);
      }
      return deck; 

    } catch(error) {
      console.error(error);
    };
  }

  // Tweaks cards for display. Default name from API is like-this. Reverse determines if card displays reversed or upright.
  static prepCard(card) {
    card.name = card.name.split('-').join(' ');
    card.reverse = Math.random() > .8 ? true : false;
  }

}

export default Tarot;