import React, { useState , useEffect } from 'react'
import { Character } from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [data, setData] = useState([]);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(()=> {
    const getData = () => {
      fetch('https://swapi.dev/api/people/')
        .then(list => list.json())
        .then(res => setData(res))
        .catch(err => console.log(`there is an error ${err}`))
        
    }
    getData();
  }, []);
  

  return (
    <div className="App container">
      <h1 className="Header">Characters</h1>
      {data.map(data => {
        return <Character data = {data} />
      })}
    </div>
  );
}

export default App;
