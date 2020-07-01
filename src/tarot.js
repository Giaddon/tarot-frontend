import Axios from "axios";

const API = "https://tarot.howlcode.com/api/v1";

class Tarot {

  static async drawOne() {
    try {
      console.log("Drawing card...")
      const response = await Axios.get(`${API}/spreads/random_card`);
      let card = response.data[0];
      console.log("Card drawn! ", card);
      card.name = this.beautifyName(card.name);
      card.reverse = Math.random() > .5 ? true : false;
      return card; 

    } catch(error) {
      console.error(error);
    };
  }

  static async drawThree() {
    try {
      console.log("Drawing card...")
      const response = await Axios.get(`${API}/spreads/three_cards`);
      let cards = response.data;
      console.log("Cards drawn! ", cards);
      for (let card of cards) {
        card.name = this.beautifyName(card.name);
        card.reverse = Math.random() > .5 ? true : false;
      }

      return cards; 

    } catch(error) {
      console.error(error);
    };
  }


  static beautifyName(str) {
    return str.split('-').join(' ');
  }

}

export default Tarot;