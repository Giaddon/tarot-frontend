/** Class for managing our deck of cards. */

class Deck {
  constructor(cards=[]) {
    this.cards = cards;
  }

  drawOne(){
    return this.cards.pop();
  }

  drawThree(){
    return this.cards.splice(this.cards.length-3);
  }

  drawFive(){
    return this.cards.splice(this.cards.length-5);
  }

  drawTen(){
    return this.cards.splice(this.cards.length-10);
  }
}

export default Deck;