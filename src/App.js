import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import ReactDOM, { createRoot } from 'react-dom'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
const [charData, setCharData] = useState({char: 'empty', birth_year: 'empty', gender: 'empty', height: 'empty'});


  const fetchChar = (id) =>
  fetch(`https://swapi.dev/api/people/`)
    .then( receivedData => receivedData.json())
    .then( charData => {
      charData.map( obj => {
        console.log(obj);
      })
      
    })





  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <button onClick={ (e) => fetchChar(1)}>Get Luke Info</button>
    </div>
  );
}

export default App;
