class Deck {
  constructor(cards=[]) {
    this.cards = cards;
  }

  drawOne(){
    console.log('Drawing card... ', this.cards[this.cards.length-1]);
   return this.cards.pop();
  }
}

export default Deck;