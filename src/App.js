import React, { useEffect, useState } from 'react';
import './App.css';
import Tarot from './tarot';

function App() {
  const [ card, setCard ] = useState({});
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    async function drawNewCard(){
      setCard(await Tarot.drawOne());
    }
    drawNewCard();
    setIsLoading(false);
  }, []);

  return isLoading 
    ? (<div className="App">
        <h2>Loading...</h2>
      </div>)
    : (<div className="App">
        <h2>{card.name}</h2>
        <img src={card.image} alt="Tarot" />
      </div>)
}

export default App;
