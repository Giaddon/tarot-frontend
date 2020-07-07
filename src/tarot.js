import Axios from "axios";

const API = "https://tarot.howlcode.com/api/v1";

class Tarot {

  static async newDeck() {
    try {
      console.log("Generating deck...")
      const response = await Axios.get(`${API}/spreads/shuffled`);
      let deck = response.data
      console.log("Deck complete.");
      for (let card of deck) {
        card.name = this.beautifyName(card.name);
        card.reverse = Math.random() > .666 ? true : false;
      }
      return deck; 

    } catch(error) {
      console.error(error);
    };
  }

  static async newMajorDeck() {
    try {
      console.log("Generating deck...")
      const response = await Axios.get(`${API}/cards`);
      let deck = response.data
      console.log("Deck complete.");
      deck.splice(22)
      
      for (let i = 0; i < deck.length; i++) {
        let rand = Math.floor(Math.random() * 22);
        [deck[i], deck[rand]] = [deck[rand], deck[i]];
      }

      // for (let i = 0; i < 50; i++) {
      //   let left = Math.floor(Math.random() * 22);
      //   let right = Math.floor(Math.random() * 22);
      //   [deck[left], deck[right]] = [deck[right], deck[left]];
      // }
      
      for (let card of deck) {
        card.name = this.beautifyName(card.name);
        card.reverse = Math.random() > .666 ? true : false;
      }
      return deck; 

    } catch(error) {
      console.error(error);
    };
  }

  static beautifyName(str) {
    return str.split('-').join(' ');
  }

}

export default Tarot;