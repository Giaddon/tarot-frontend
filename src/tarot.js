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
      return card; 

    } catch(error) {
      console.error(error);
    };
  }

  static beautifyName(str) {
    return str.split('-').join(' ');
  }

}

export default Tarot;