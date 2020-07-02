import React, { useEffect, useState } from 'react';
import './App.css';
import CardTable from './CardTable';


function App() {
  const [ isLoading, setIsLoading ] = useState(false);

  

  // async function drawNewCard(){
  //   //setIsLoading(true);
  //   const newCard = await Tarot.drawOne() 
  //   setCards([...cards, newCard]);
  //   //setIsLoading(false);
  // }

  // useEffect(() => {
  //   async function drawThreeCards(){
  //     const newCards = await Tarot.drawThree() 
  //     setCards([...cards, ...newCards]);
  //     setIsLoading(false);
  //   }

  //   drawThreeCards();
  // }, []);

  return isLoading 
    ? (<div className="App">
        <h2>Loading...</h2>
      </div>)
    : (<div className="App">
        <CardTable />
      </div>)
}

export default App;
