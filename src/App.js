import React from 'react';
import Categorizador from './components/Categorizador.js';
import cardsData from './data/cards.json'
function App() {
  return (
    <div className="App">
      <Categorizador data={cardsData}/>
    </div>
  );
}

export default App;
