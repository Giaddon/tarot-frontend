import React, { useEffect, useState } from 'react';
import './App.css';
import Tarot from './tarot';
import Card from './Card';
import DeckControls from './DeckControls';
import CardTable from './CardTable';

function App() {
  const [ cards, setCards ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);

  async function drawNewCard(){
    //setIsLoading(true);
    const newCard = await Tarot.drawOne() 
    setCards([...cards, newCard]);
    //setIsLoading(false);
  }

  useEffect(() => {
    async function drawThreeCards(){
      const newCards = await Tarot.drawThree() 
      setCards([...cards, ...newCards]);
      setIsLoading(false);
    }

    drawThreeCards();
  }, []);

  return isLoading 
    ? (<div className="App">
        <h2>Loading...</h2>
      </div>)
    : (<div className="App">
        <DeckControls drawOne={drawNewCard} />
        <CardTable cards={cards}/>
      </div>)
}

export default App;
