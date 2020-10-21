import React from 'react';
import './App.css';
import './components/list-pokemon/list-pokemon'
import Pokelistelement from './components/list-pokemon/list-pokemon';

function App() {
  return (
    <div className='container'>
      <Pokelistelement value='150'/>
    </div>
  );
}

export default App;
